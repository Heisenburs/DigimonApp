import { Navbar, Container } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://1000logos.net/wp-content/uploads/2020/11/Digimon-Logo-1999.jpg"
              width="200"
              height="150"
              className="d-inline-block align-top"
              alt="Digimon logo (1999)"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
