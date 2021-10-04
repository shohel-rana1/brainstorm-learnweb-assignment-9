import React from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import Rating from 'react-rating';
const ServiceItem = (props) => {
    const { image, title, cost, rating, author } = props.product;
    return (
        <div className="col-12 col-md-6 col-lg-4 mt-5">
            <Card style={{ width: '320px' }}>
                <Card.Img className="img image-desgin img-fluid" variant="top" src={image} style={{ height: '280px' }} />
                <Card.Body>
                    <Card.Title className="name">{title}</Card.Title>
                    <Card.Text>
                        Author: {author}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><h3>${cost}</h3></ListGroupItem>
                    <ListGroupItem>Ratings: <Rating
                        className="ratings"
                        initialRating={rating}
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star icon-color"
                        readonly></Rating></ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button
                        className="w-100 ba-color">View Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceItem;