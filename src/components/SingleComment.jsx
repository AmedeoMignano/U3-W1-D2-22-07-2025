// single Comments sarà figlio di CommentList e praticamente mentre comment list sarà la
// nostra ul SingleComment Sarà il nostro li.

import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class SingleComment extends Component {
  render() {
    return (
      <ListGroup.Item>
        {this.props.commenti.comment} - {this.props.commenti.rate}
      </ListGroup.Item>
    );
  }
}
export default SingleComment;
