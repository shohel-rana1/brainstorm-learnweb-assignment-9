import React from 'react';
import './Contact.css'
import { Form, Button } from 'react-bootstrap';
const Contact = () => {
    return (
        <div className="backgroundcolor">
            <h1 className="pt-5 text-white">Contact Us to buy learning courses for career building in 21 century</h1>
            <div className="container pb-5 text-left backgroundcolor">

                <Form className="bgColor p-5">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Contact;