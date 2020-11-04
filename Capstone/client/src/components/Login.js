import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Image, Container } from 'react-bootstrap';
import { useHistory, Link } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";

export default function Login() {
    const history = useHistory();
    const { login } = useContext(UserProfileContext);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const loginSubmit = (e) => {
        e.preventDefault();
        login(email, password)
            .then(() => history.push("/matchups"))
            .catch(() => alert("Invalid email or password"));
    };

    return (
        <Container>
            <Form onSubmit={loginSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label for="email">Email</Form.Label>
                    <Form.Control type="email" id="email" type="text" onChange={e => setEmail(e.target.value)} />
                </Form.Group>
                <FormGroup controlId="formBasicPassword">
                    <Form.Label for="password">Password</Form.Label>
                    <Form.Control id="password" type="password" onChange={e => setPassword(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Button variant="dark" type="submit">Login</Button>
                </FormGroup>
                <FormGroup>
                    <em>
                        Not registered? <Link to="register">Register</Link>
                    </em>
                </FormGroup>
            </Form >
        </Container>
    );
}