// adesso creo la vera e propria BookList a cui, come era stato per la card;
// alla sua props sarà mandato il json, ma questa volta verra utilizzato per mostare
// con map tutti i libri
// all'interno di BookList ci andrà quindi la mia SingleBook card

// importo quindi single book
import SingleBook from "./SingleBook";
// importo anche la row e la col
import { Row, Col, Container } from "react-bootstrap";

// creo la funzione BookList che come parametro riceverà la prop

const BookList = function ({ books }) {
  // faccio il return che mi tornerà intanto un container
  // e una row e dentro la row dovrò ciclare
  // con map book e dovrò avere per ogni book una colonna e un SingleBook a cui darò
  // la prop book
  return (
    <Container>
      <Row>
        {/* qua ciclo e per ogni elemento singolo elemento di books 
      quindi (book) mi deve tornare una colonna con SingleBook dentro ricordiamo
      di dare la key alla colonna perché altrimenti il metodo map darà errore*/}
        {books.map((book) => {
          return (
            <Col key={book.asin} sm={12} md={4} lg={3} className=" g-3">
              <SingleBook book={book} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
// adesso possiamo esportare il nostro BookList e innestarlo in App
export default BookList;
