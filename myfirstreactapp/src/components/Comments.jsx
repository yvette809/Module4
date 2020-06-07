import React from "react";
import { ListGroup } from "react-bootstrap";
import AddComment from "./AddComment";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: this.props.book,
      comments: [],
    };
  }

  componentWillMount = async () => {
    try {
      let response = await fetch(
        `https://striveschool.herokuapp.com/api/comments/${this.props.book.asin}`,
        {
          method: "GET",
          headers: {
            Authorization: "Basic " + btoa("user27:ZGDWyFCA8umbgpvZ"),
          },
        }
      );
      let comments = await response.json();

      this.setState({
        comments: comments,
      });
    } catch (err) {
      console.log("error!", err);
    }
  };

  render() {
    const { comments } = this.state;
    console.log(this.state.comments);
    return (
      <div className="mt-2">
        <ListGroup>
          {comments.map((comment, i) => {
            return (
              <ListGroup.Item className="mb-3" key={i}>
                <div className="d-flex flex-column">
                  <span>{comment.author}</span>
                  <span>About {comment.elementId}</span>
                  <span>{comment.comment}</span>
                  <span>{comment.rate}</span>
                </div>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
        <AddComment asin={this.state.book.asin} />
      </div>
    );
  }
}

export default Comments;
