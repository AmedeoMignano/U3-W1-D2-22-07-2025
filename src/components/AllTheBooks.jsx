// adesso creerò il container con le card, questa volta userò la classe per il componente

// importo il mio JSON contente i libri e gli assegno un nome per poi poter utilizzare
// il metodo map

import fantasy from "../data/fantasy.json";
// importo anche component che sarà esteso dalla classe generata
import { Component } from "react";
// importo tutti i componenti di reactbootstrap che mi servono
import { Container, Row, Col, Card, Button } from "react-bootstrap";

// creo la classe per la generazione delle cards
class AllTheBooks extends Component {
  // nella classe si utilizza sempre il metodo render() per il return del componente

  render() {
    return (
      <Container>
        <Row>
          {/* adesso ciclo il mio array con il metodo map */}
          {fantasy.map((book) => {
            return (
              <Col sm={12} md={4} lg={3} className=" g-3">
                <Card key={book.asin} className="border border-primary h-100">
                  <Card.Img
                    variant="top"
                    src={book.img}
                    alt={book.title}
                    className="h-75"
                  />
                  <Card.Body className=" d-flex flex-column">
                    <Card.Title className=" flex-grow-1">
                      {book.title}
                    </Card.Title>

                    <div className=" d-flex justify-content-between align-items-center">
                      <Button variant="primary">Buy</Button>
                      <Card.Text>€ {book.price}</Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
export default AllTheBooks;
