import React, {Component} from 'react'
import {Container,Row, Col, Carousel} from 'react-bootstrap'
import books from '../jsons/fantasy.json'
import '../App.css';



const Cover = () => {
    return (
        <Container>
            <Row>
                <Col>
                <h1>Books</h1>
                <p>Collection of The Best Books</p>
                <p>Try our Books and Thank Us Later!</p>
                <Carousel>
                    {books.map(book => {
                        return (
                        <Carousel.Item key = {book.asin}>
                        <img
                          className="d-block w-100"
                          src={book.img}
                          alt={book.title}
                        />
                        <Carousel.Caption>
                        <h3>${book.price}</h3>
                          <p>{book.category}</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      
                        )
                    })}

                </Carousel>
                
                </Col>

            </Row>
        </Container>
 
    )
}



export default Cover;