const express = require("express");
const cors = require("cors");
const axios = require("axios");
const port = 3000;

const app = express();

const optionRequest = (url) => {
  return {
    method: "GET",
    url,
    headers: { Authorization: "Bearer aSuperSecretKey" },
  };
};
 
app.use(cors());
app.use(express.json());

//http://localhost:3000/
app.get("/", async (req, res) => {
  console.log("test is successful!");
  res.status(200).json({ text: "test is successful!" });
});

//http://localhost:3000/files/listfiles
app.get("/files/listfiles", async (req, res) => {
  try {
    const options = optionRequest(
      "https://echo-serv.tbxnet.com/v1/secret/files"
    );
    const response = await axios(options);
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3000/files/getfile?fileName=test1.csv
app.get("/files/getfile", async (req, res) => {
  const { fileName: file = "" } = req.query;

  try {
    if (file == "") {
      res
        .status(400)
        .json({ error: "No se ha recibido el nombre del archivo" });
    } else {
      const options = optionRequest(
        `https://echo-serv.tbxnet.com/v1/secret/file/${file}`
      );
      const response = await axios(options);
      console.log(response.data);
      const linesRaw = response.data.split(/\r?\n/);

      const lines = linesRaw.slice(1).map((lineRaw) => {
        const [_, text, number, hex] = lineRaw.split(",");
        return { text: text || null, number: number || null, hex: hex || null };
      });

      res.status(200).json({ file, lines });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3000/files/data
app.get("/files/data", async (req, res) => {
  try {
    const listFilesOptions = optionRequest(
      "https://echo-serv.tbxnet.com/v1/secret/files"
    );
    const listFilesResponse = await axios(listFilesOptions);
    const files = listFilesResponse.data.files;

    if (typeof files !== "undefined" && files.length > 0) {
      console.log("Se han obtenido " + files.length + " archivos");

      const allFilesContent = await Promise.all(
        files.map(async (file) => {
          try {
            const fileContentOptions = optionRequest(
              `https://echo-serv.tbxnet.com/v1/secret/file/${file}`
            );
            const fileContentResponse = await axios(fileContentOptions);
            const linesRaw = fileContentResponse.data.split(/\r?\n/);

            const validLines = linesRaw
              .slice(1)
              .map((lineRaw) => {
                const lineData = lineRaw.split(",");
                if (lineData.length === 4) {
                  const [_, text, number, hex] = lineData;
                  return { file, text, number, hex };
                }
              })
              .filter(Boolean);

            return validLines;
          } catch (error) {
            console.error(
              `Error downloading or processing ${file}:`,
              error.message
            );
            return null;
          }
        })
      );
      res.status(200).json(allFilesContent);
      //res.status(200).json({ mensaje: "jueputa que rico" });
    } else {
      res.status(400).json({
        error: "Ocurrió un error obteniendo la lista de archivos",
      });
    }
  } catch (err) {
    res.status(500).json(err.mensaje);
  }
});

app.listen(port, () => {
  console.log("Backend server is running on 3000!");
});
