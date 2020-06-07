import React, { Component } from "react";
import Books from "../jsons/fantasy.json";
import { Card } from "react-bootstrap";
import Comments from "../components/Comments";
class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: Books.find((book) => book.asin == this.props.match.params.bookId),
      comments: [],
    };
  }

  render() {
    const { book } = this.state;

    return (
      <>
        <Card style={{ width: "30rem" }}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>€{book.price}</Card.Text>
          </Card.Body>
        </Card>
        <Comments book={book} />
      </>
    );
  }
}

export default Book;
