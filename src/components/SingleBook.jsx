// devo creare una funzione per una singola card in cui il parametro della funzione
// sarà la mia props ovvero l'array di libri che mi arriva per funzionare

// importo quindi card prima
import { Component } from "react";
import { Card, Col, Button } from "react-bootstrap";
import CommentArea from "./CommentArea";

// poi ricopio la card di AllTheBooks per farlo simile, ma dentro la funzione

// const SingleBook = function ({ book }) {
//   // ritorno la card
//   console.log(book);
//   return (
//     <Card key={book.asin} className="border border-primary h-100">
//       <Card.Img
//         variant="top"
//         src={book.img}
//         alt={book.title}
//         className="h-75"
//       />
//       <Card.Body className=" d-flex flex-column">
//         <Card.Title className=" flex-grow-1">{book.title}</Card.Title>

//         <div className=" d-flex justify-content-between align-items-center">
//           <Button variant="primary">Buy</Button>
//           <Card.Text>€ {book.price}</Card.Text>
//         </div>
//       </Card.Body>
//     </Card>
//   );
// };
// // Esporto Default SingleBook
// export default SingleBook;

// adesso prima di modificare i classe lo testo importando fantasy in app

// la nostra prop in questo caso book è definita poi quando importo nell'app
// e il valore che li andremo a dare è il primo elemento di fantasy quindi
// <SingleBook book={fantasy[0]}

// Ora che ho visto che la mia card funziona trasformo single book in class per potergli
// aggiungere lo state di select.

// creo la classe e la estendo a component di React
class SingleBook extends Component {
  // aggiungo lo stato di selected in false
  state = {
    selected: false,
  };
  //   uso il metodo toogle Select che mi permette di invertire lo stato di selected
  //  toggle select targhetterà lo stato attuale di selected
  // e lo invertirà con l'operatore not !
  toggleSelect = () => {
    // setto il nuovo stato che dovrà avere come parametro lo stato attuale
    this.setState((prevState) => ({
      // selected quindi sarà diverso dal valore iniziale
      selected: !prevState.selected,
    }));
  };
  //   adesso faccio il render ma prima di andare a creare la card
  //   singola mi conviene crearmi delle variabili
  //  per poter richiamare meglio this.props che sarà il libro che ci arriverà dopo da fantasy
  // e lo state per la comparazione avrò quindi
  render() {
    const { book } = this.props;
    const { selected } = this.state;

    // adesso ritorno la card con i valori giusti
    // applichiamo allo style della card un border con operatore ternario
    // se selected è true darà un colore al bordo altrimenti un altro
    return (
      <>
        <Card
          key={book.asin}
          className="h-100"
          style={{ border: selected ? "2px solid #0D6EFD" : "1px solid green" }}
          // metto all'onClick il toggleSelect
          onClick={this.toggleSelect}
        >
          <Card.Img
            variant="top"
            src={book.img}
            alt={book.title}
            className="h-75"
          />
          <Card.Body className=" d-flex flex-column">
            <Card.Title className=" flex-grow-1">{book.title}</Card.Title>

            <div className=" d-flex justify-content-between align-items-center">
              <Button variant="primary">Buy</Button>
              <Card.Text>€ {book.price}</Card.Text>
            </div>
          </Card.Body>
        </Card>
        {/* uso lo shortcircuit per far spuntare il componente CommentArea
        quando lo stato selected della card è true */}
        {this.state.selected && <CommentArea asin={book.asin} />}
      </>
    );
  }
}

// adesso la mia singlecard è pronta e la posso esportare come default
export default SingleBook;

// andiamo adesso a lavorare nella booklist
