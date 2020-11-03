import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { BetContext } from "../../providers/BetProvider";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
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

            <h3> Place a Bet! </h3>
            <Form>
                <FormGroup>
                    <Label htmlFor="toBetAmount"><strong>Bet Amount</strong></Label>
                    <Input className="p-2 bd-highlight justify-content-center"
                        value={newBet.toBetAmount}
                        onChange={handleFieldChange}
                        type="number"
                        name="toBetAmount"
                        id="toBetAmount"
                        required=""
                    />
                </FormGroup>
            </Form >
            <Button block className="placeBet" type="button" color="success"
                isLoading={isLoading} onClick={placeNewBet}>
                {'Place Bet'}
            </Button>
            <Button block className="goBack" type="button" color="danger"
                isLoading={isLoading} onClick={() => history.goBack()}>
                {'Cancel'}</Button>
        </>
    )
};
export default PlaceBet;