import React from "react";
import { Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";


const CardComponent = {
    width: "150px",
    float: "left",
    margin: "10px",
    height: "150px",
    backgroundRepeat: "no-repeat"
}

const Figure = {
    display: "block",
    width: "202px",
    height: "170px",
    margin: "10px",
    padding: "9px"
}

const Image = {
    width: "100px",
    height: "75px",
}
const Team = ({ team }) => {
    return (
        <div style={CardComponent}>
            <figure style={Figure}><img style={Image} src={team.imageLocation} />
                <figcaption>
                    {team.name}
                </figcaption>
                <Link to={`/team/${team.id}`}>
                    +{team.odds}
                </Link> < br />
                <Link to={`/team/edit/${team.id}`}>
                    Adjust Odds
                         </Link>
            </figure>
        </div>

        //     <Card.Body>
        //         <Card.Title>{team.name}</Card.Title>
        //         <Button variant="light">
        //             <Link to={`/team/${team.id}`}>
        //             +{team.odds}
        //             </Link>
        //         </Button>
        //         <Button variant="light">
        //             <Link to={`/team/edit/${team.id}`}>
        //             Adjust Odds
        //                 </Link>
        //         </Button>
        //     </Card.Body>
        // </Card >
    );
}

export default Team;