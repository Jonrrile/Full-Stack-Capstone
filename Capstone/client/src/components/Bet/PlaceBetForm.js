import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { BetContext } from "../../providers/BetProvider";
import { Container, FormControl, Label, InputGroup, Button } from "react-bootstrap";
import { TeamContext } from "../../providers/TeamProvider";

const PlaceBet = () => {
    const { id } = useParams();
    const history = useHistory();
    const { placeBet } = useContext(BetContext);
    const [team, setTeam] = useState();
    const { getTeam } = useContext(TeamContext);
    const [isLoading, setIsLoading] = useState(false)
    const currentUser = JSON.parse(sessionStorage.getItem('userProfile')).id;
    const [newBet, setNewBet] = useState({
        teamId: parseInt(id),
        userProfileId: currentUser,
        toBetAmount: "",
    })

    useEffect(() => {
        getTeam(id).then(setTeam);
    }, []);

    const handleFieldChange = (e) => {
        const stateToChange = { ...newBet };
        stateToChange[e.target.id] = e.target.value;
        setNewBet(stateToChange);
    };

    const placeNewBet = () => {
        if (newBet.toBetAmount === "") {
            alert("please enter an amount");
        } else {
            setIsLoading(true);
            const parseBet = parseInt(newBet.toBetAmount)
            newBet.toBetAmount = parseBet;
            placeBet(newBet);
            setIsLoading(false);
            history.push(`/betsbyteam/${id}`)
        }
    }

    return (
        <>
            <Container>
                <h3> Place a Bet! </h3>

                <InputGroup className="mb-3">
                    <FormControl
                        htmlFor="toBetAmount"
                        value={newBet.toBetAmount}
                        onChange={handleFieldChange}
                        type="number"
                        name="toBetAmount"
                        id="toBetAmount"
                        required=""
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary"
                            isLoading={isLoading} onClick={placeNewBet}>
                            {'Submit'}
                        </Button>
                        <Button variant="outline-secondary"
                            isLoading={isLoading} href="/teams">
                            {'Cancel'}</Button>
                    </InputGroup.Append>
                </InputGroup>

            </Container>
        </>
    )
};
export default PlaceBet;