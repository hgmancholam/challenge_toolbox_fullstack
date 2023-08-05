import { Outlet } from "react-router-dom";
import Badge from "react-bootstrap/Badge";

const Home = () => {
  return (
    <div>
      <h4>reactJs toolbox OTT challenge Full stack</h4>
      <span>Test giovanny Manchola</span>
      <br />
      <Badge bg="secondary">hgmancholam@gmail.com</Badge>
      <Outlet />
    </div>
  );
};

export default Home;
