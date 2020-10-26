import React from "react";
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Team = ({ team }) => {
    return (
        <ListGroup>
            <ListGroup.Item>{team.name} <br />
                <Button variant="light">
                    <Link to={`/team/${team.id}`}>
                        +{team.odds}
                    </Link>
                    {/* <input type="checkbox" class="form-check-input" id="exampleCheck1">
            </input> */}
                </Button>
            </ListGroup.Item>
        </ListGroup>

    );
}

export default Team;