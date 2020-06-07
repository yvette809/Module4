import React from "react";
import {
  Jumbotron,
  Button,
  Container,
  Row,
  Col,
  Card,
  Dropdown,
  DropdownButton,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
let bookCategories = ["fantasy", "horror", "history", "romance", "scifi"];
let books = {
  fantasy: require("../jsons/fantasy.json"),
  horror: require("../jsons/horror.json"),
  history: require("../jsons/history.json"),
  romance: require("../jsons/romance.json"),
  scifi: require("../jsons/scifi.json"),
};

class Cover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: books.fantasy.slice(0, 12),
      categorySelected: this.props.jumboTitle,
    };
  }

  handleDropdownChange = (category) => {
    this.setState({
      books: books[category].slice(0, 12),
      categorySelected: category,
    });
  };

  handleSearchQuery = (searchQuery) => {
    let category = this.state.categorySelected;

    if (searchQuery) {
      let filteredBooks = books[category].filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      this.setState({ books: filteredBooks.slice(0, 12) });
    } else {
      this.setState({ books: books[category].slice(0, 12) });
    }
  };

  render() {
    return (
      <div>
        <Container>
          <InputGroup>
            <DropdownButton
              as={InputGroup.Prepend}
              id="dropdown-basic-button"
              className="mb-3"
              title={this.state.categorySelected}
            >
              {bookCategories.map((category, index) => {
                return (
                  <Dropdown.Item
                    href="#/action-1"
                    key={`dropdown-category-${index}`}
                    onClick={() => this.handleDropdownChange(category)}
                  >
                    {category}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
            <FormControl
              placeholder="Search Books by Title"
              aria-label="Search"
              aria-describedby="basic-addon1"
              onChange={(e) => this.handleSearchQuery(e.target.value)}
            />
          </InputGroup>
          <Row>
            {this.state.books ? (
              this.state.books.map((book) => {
                return (
                  <Col xs={6} key={book.asin}>
                    <Card style={{ width: "18rem" }}>
                      <Link to={`/book/${book.asin}`}>
                        <Card.Img variant="top" src={book.img} />
                      </Link>

                      <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Text>€{book.price}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
            ) : (
              <div> nothing here </div>
            )}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Cover;
