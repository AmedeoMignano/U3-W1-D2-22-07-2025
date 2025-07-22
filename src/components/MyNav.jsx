// prendo la navbar dalla documentazione di bootstrap react ricordandomi
// poi di importare tutti i componenti presenti nella nav stessa
import { Navbar, Container, Nav } from "react-bootstrap";
// creo una funzioe per la nav
const MyNav = function () {
  // al solito la funzione mi deve tornare il componente stesso
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container fluid={true}>
        <Navbar.Brand href="#" className="text-light">
          BookShop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Esporto di default il componente

export default MyNav;
