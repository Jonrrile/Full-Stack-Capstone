import React, { useState, useContext } from "react";
import { Button, Form, Jumbotron, FormGroup, Image, Container } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";

export default function Register() {
    const history = useHistory();
    const { register } = useContext(UserProfileContext);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const registerClick = (e) => {
        e.preventDefault();
        if (password && password !== confirmPassword || password.length <= 6) {
            alert("Password needs to match and be longer than six characters.");
        } else {
            const userProfile = { name, email };
            register(userProfile, password)
                .then(() => history.push("/teams"));
        }
    };

    return (
        <div>
            <Jumbotron className="jumbotron"><h1><i>BetOnIt!</i></h1></Jumbotron>
            <Container>
                <Form onSubmit={registerClick} className="register">
                    <Form.Group>
                        <Form.Label htmlFor="name">Name</Form.Label>
                        <Form.Control id="name" type="text" onChange={e => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label for="email">Email</Form.Label>
                        <Form.Control id="email" type="email" onChange={e => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label for="password">Password</Form.Label>
                        <Form.Control id="password" type="password" onChange={e => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label for="confirmPassword">Confirm Password</Form.Label>
                        <Form.Control id="confirmPassword" type="password" onChange={e => setConfirmPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Button variant="dark">Register</Button>
                    </Form.Group>
                </Form>
            </Container>
        </div>
    );
}