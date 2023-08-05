import { Container, Table, Alert, Badge } from "react-bootstrap";
import "./file-content.styles.scss";

function FileContent({ currentFile, fileData }) {
  const { file, lines } = fileData ?? { file: "", lines: {} };

  if (!file) {
    return (
      <Container>
        <Alert key="danger" variant="danger">
          File <b>{currentFile}</b> not found
        </Alert>
      </Container>
    );
  } else {
    return (
      <Container>
        <div>
          <Alert key="secondary" variant="secondary" className="title-file">
            <h3>
              File data from: <b>{currentFile}</b>
            </h3>
            &nbsp;&nbsp;
            <span>(File name not shown in columns)</span>
          </Alert>
        </div>
        {lines && lines.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Text</th>
                <th>Number</th>
                <th>Hex</th>
              </tr>
            </thead>
            <tbody>
              {lines.map((line, key) => (
                <tr key={key}>
                  <td>{line.text}</td>
                  <td>{line.number}</td>
                  <td>{line.hex}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <Alert key="warning" variant="warning">
            No data found in this file.
          </Alert>
        )}
      </Container>
    );
  }
}

export default FileContent;
