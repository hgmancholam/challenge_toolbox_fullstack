import { useContext } from "react";
import { FilesContext } from "../../contexts/files.context";
import { Table } from "react-bootstrap";
import "./list-files.styles.scss";
import { Container, Spinner } from "react-bootstrap";
import FileContent from "../file-content/file-content.component";

function ListFiles() {
  const {
    files,
    currentFile,
    setFile,
    currentFileContent,
    loadingFileContent,
  } = useContext(FilesContext);

  const updateCurrentFile = (fileToCheck) => {
    if (fileToCheck) {
      setFile(fileToCheck);
    }
  };

  return (
    <Container>
      <div className="titulo-list-files">
        <h2>List all files </h2> <span>(Pick a file to view its content) </span>
      </div>

      {!files || files.length === 0 ? (
        <Spinner animation="border" role="status" className="loading" />
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>List files from Service</th>
            </tr>
          </thead>
          <tbody style={{ cursor: "pointer" }}>
            {files.map((fileName) => (
              <tr key={fileName} onClick={() => updateCurrentFile(fileName)}>
                <td>{fileName}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <Container>
        {loadingFileContent && (
          <Spinner animation="border" role="status" className="loading" />
        )}
        {currentFile && !loadingFileContent && (
          <FileContent
            currentFile={currentFile}
            fileData={currentFileContent}
          />
        )}
      </Container>
    </Container>
  );
}

export default ListFiles;
