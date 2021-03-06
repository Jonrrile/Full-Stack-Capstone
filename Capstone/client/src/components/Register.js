import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input, Jumbotron, Container } from 'reactstrap';
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
                .then(() => history.push("/matchups"));
        }
    };

    return (
        <div>
            <Jumbotron className="jumbotron"><h1><i>BetOnIt!</i></h1></Jumbotron>
            <Form onSubmit={registerClick}>
                <FormGroup>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" type="text" onChange={e => setName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input id="email" type="text" onChange={e => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input id="password" type="password" onChange={e => setPassword(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="confirmPassword">Confirm Password</Label>
                    <Input id="confirmPassword" type="password" onChange={e => setConfirmPassword(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Button>Register</Button>
                </FormGroup>
            </Form>
        </div>
    );
}