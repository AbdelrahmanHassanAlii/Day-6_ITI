import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container className="justify-content-center ">
        <Navbar.Brand href="#">
          <h1 className="text-light">Abelrahman Hassan</h1>{" "}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
