// creo il componente CommentList che riceverà dal padre CommentArea l'array dei commenti
// presenti nel suo state. CommentList a sua volta avrà all'interno il Single Comment a
// cui manderà i commenti

import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentList extends Component {
  render() {
    return (
      // adesso dovrei mappare tutti i commenti dentro il list group per creare i vari
      // Single Comments ovvero i listGroup
      <ListGroup>
        {this.props.comment.map((c) => {
          return <SingleComment key={c._id} commenti={c} />;
        })}
      </ListGroup>
    );
  }
}
export default CommentList;
