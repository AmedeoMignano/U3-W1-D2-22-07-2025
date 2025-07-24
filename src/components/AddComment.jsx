// questo componente dovrà avere un input filter per aggiungere commenti e quindi fare
// una fetch che posti nell'api
// creo le variabili per gli endpoint e la chiave di autorizzazione
const endpoint = "https://striveschool-api.herokuapp.com/api/comments/";
const apiKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODc2MDNlNmE4OWI0ZDAwMTU0MDI1MTUiLCJpYXQiOjE3NTI1NjQ3MTAsImV4cCI6MTc1Mzc3NDMxMH0.d-jKx1F-XMSDKlWPhEADEMsr1tKvxAm0oexTrngf8Bc";

import { Component } from "react";
import { Button, Form } from "react-bootstrap";

// creo la classe per il componente
class AddComment extends Component {
  // creo lo stato dove andranno tutti i dati
  state = {
    comment: "",
    rate: 1,
  };

  inputPost = (e) => {
    e.preventDefault();
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKey,
      },
      body: JSON.stringify({
        comment: this.state.comment,
        rate: this.state.rate,
        elementId: this.props.asin,
      }),
    })
      .then((response) => {
        if (response.ok) {
          this.setState({ comment: "", rate: 1 });
          this.props.getComments();
        } else {
          throw new Error("Errore invio commento");
        }
      })
      .catch((err) => {
        console.log("Errore POST commento", err);
      });
  };

  render() {
    return (
      <Form onSubmit={this.inputPost} className="mt-3">
        <Form.Group
          type="text"
          className="form-control mb-2"
          placeholder="Scrivi un commento"
          value={this.state.comment}
          onChange={(e) => this.setState({ comment: e.target.value })}
        />
        <Form.select
          className="form-select mb-2"
          value={this.state.rate}
          onChange={(e) => this.setState({ rate: e.target.value })}
        >
          {[1, 2, 3, 4, 5].map((r) => (
            <Option key={r} value={r}>
              {r}
            </Option>
          ))}
        </Form.select>
        <Button type="submit" className="btn btn-success w-100">
          Invia
        </Button>
      </Form>
    );
  }
}

export default AddComment;
