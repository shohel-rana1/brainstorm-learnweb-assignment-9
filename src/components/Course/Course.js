import React from 'react';
import './Course.css'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Course = (props) => {
    const { img, name } = props.course;
    return (
        <div className="col-12 col-md-6 col-lg-4 mt-5">
            <Card className="card" style={{ width: '320px' }}>
                <Card.Img className="img image-desgin" variant="top" src={img} style={{ height: '220px' }} />
                <Card.Body>
                    <Card.Title className="name">{name}</Card.Title>
                </Card.Body>
                <Card.Body>
                    <Link className="nav-link" to="/services"><Button
                        className="w-100 ba-color">Preview Now</Button></Link>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;