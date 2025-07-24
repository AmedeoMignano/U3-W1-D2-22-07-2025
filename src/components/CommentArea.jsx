// devo creare il componente a classe di CommentArea, che deve essere visibile solo se
// lo stato selected di SingleBook è true
// CommentArea per poter mostrare i commenti del libro selezionato dovrà aver passato
// dal padre SingleBook una prop con il suo id o asin in questo caso
// fatto questo dentro comment area dovrò fare una funzione per fare il get fetch
// dei commenti del libro e metterli dentro un array all'interno di uno stato

// creo le variabili per gli endpoint e la chiave di autorizzazione
const endpoint = "https://striveschool-api.herokuapp.com/api/comments/";
const apiKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODc2MDNlNmE4OWI0ZDAwMTU0MDI1MTUiLCJpYXQiOjE3NTI1NjQ3MTAsImV4cCI6MTc1Mzc3NDMxMH0.d-jKx1F-XMSDKlWPhEADEMsr1tKvxAm0oexTrngf8Bc";

import { Component } from "react";
import { Container } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  // creo lo stato con l'array in cui andranno i miei commenti
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  };

  // adesso creo la funzione che mi servirà per fare il get dei commenti al mio endpoint
  //   dovrò aggiungere l'asin, ovvero la mia props
  getComments = () => {
    fetch(endpoint + this.props.asin, {
      headers: {
        Authorization: apiKey,
      },
    })
      // adesso controllo se arriva la risposta
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nel recupero commenti");
        }
      })
      //   se tutto va a buon fine allora mi arriveranno i commenti e li dovrò settare
      //  nel mio stato
      .then((ObjComments) => {
        // faccio un console log per vedere se arrivano
        console.log("Ecco I commenti", ObjComments);
        // setto il nuovo stato
        this.setState({
          comments: ObjComments,
          isLoading: false,
        });
      })
      //   altrimenti mi arriva l'errore
      .catch((err) => {
        console.log("Errore", err);
      });
  };
  //   questa al momento è la mia funzione la dovrò invocare dentro un componentDIdMount
  componentDidMount() {
    this.getComments();
  }
  render() {
    return (
      // aggiungo un container dove finiranno i miei altri due componenti iniziali
      // ovvero CommentList e AddComment
      <Container>
        {/* commentlist dovrà ricevere l'array di commentArea come props*/}
        <CommentList comment={this.state.comments} />
        {/* <AddComment asin={this.props.asin} /> */}
      </Container>
    );
  }
}
export default CommentArea;
