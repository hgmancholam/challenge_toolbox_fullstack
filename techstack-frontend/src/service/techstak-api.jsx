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

export async function GetAllFilesData(setAllFileData) {
  const res = await fetch(`http://localhost:3100/files/data`);
  if (res.status === 200) {
    const data = await res.json();
    //var linesCount = Object.keys(data.lines).length;
    setAllFileData(data);
  } else {
    setAllFileData(null);
  }
}
