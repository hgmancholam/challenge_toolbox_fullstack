export async function GetListFiles(setListFiles) {
  const res = await fetch(`http://localhost:3100/files/listfiles`);
  const data = await res.json();
  const { files } = data;
  setListFiles(files);
}

export async function GetFileContent(file, setFileData) {
  const res = await fetch(
    `http://localhost:3100/files/getfile?fileName=${file}`
  );
  if (res.status === 200) {
    const data = await res.json();
    //var linesCount = Object.keys(data.lines).length;
    setFileData(data);
  } else {
    setFileData(null);
  }
}

export async function GetAllData(setFileData) {
  const res = await fetch(`http://localhost:3100/files/data`);
  const data = await res.json();
  setFileData(data);
}
