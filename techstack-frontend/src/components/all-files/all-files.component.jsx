import { useContext, useEffect } from "react";
import { Fragment } from "react";
import { FilesContext } from "../../contexts/files.context";
import { Table } from "react-bootstrap";
import "./all-files.styles.scss";
import { Container, Spinner } from "react-bootstrap";
 
function AllFiles() {
  const { loadingFileContent, allFilesData, getRawData } =
    useContext(FilesContext);

  useEffect(() => {
    getRawData();
    console.log(allFilesData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <div className="titulo">
        <h2>React Test App</h2>
      </div>

      {(loadingFileContent || Object.keys(allFilesData).length === 0) && (
        <Spinner animation="border" role="status" className="loading" />
      )}

      {allFilesData &&
        !loadingFileContent &&
        Object.keys(allFilesData).length > 0 && (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>File Name</th>
                <th>Text</th>
                <th>Number</th>
                <th>Hex</th>
              </tr>
            </thead>
            <tbody>
              {allFilesData.map((item, index) => (
                <Fragment key={index}>
                  {item.lines.map((line, lineIndex) => (
                    <tr key={lineIndex}>
                      <td>{item.file}</td>
                      <td>{line.text}</td>
                      <td>{line.number}</td>
                      <td>{line.hex}</td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </Table>
        )}
    </Container>
  );
}

export default AllFiles;
