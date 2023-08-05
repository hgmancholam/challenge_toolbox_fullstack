import { Container } from "react-bootstrap";
import { EnvelopeFill } from "react-bootstrap-icons"; // Importa el icono de correo electrónico
import "./home.styles.scss";

const Home = () => {
  return (
    <Container>
      <br />
      <div className="container-home">
        <br />{" "}
        <div className="titulo-home">
          <h1>ReactJs toolbox OTT Full stack challenge</h1>
        </div>
        <br />
        <span>
          <b>Author: </b>Giovanny Manchola
        </span>
        <br />
        <a href={'mailto:hgmancholam@gmail.com'} className="mail-link">
          <EnvelopeFill className="mail-icon" />
          Contact by mail
        </a>
      </div>
    </Container>
  );
};

export default Home;
