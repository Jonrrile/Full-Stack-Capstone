import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { BetContext } from "../../providers/BetProvider";
import { Container, FormControl, Label, InputGroup, Button } from "react-bootstrap";

const EditBet = () => {
    const { id } = useParams();
    const history = useHistory();
    const { teamId } = useParams();
    const { editBet, getBetById } = useContext(BetContext);
    const [isLoading, setIsLoading] = useState(false);
    const [updatedBet, setUpdatedBet] = useState({});

    useEffect(() => {
        getBetById(id).then(setUpdatedBet);
    }, [])

    const handleEditFieldChange = (e) => {
        const stateToChange = { ...updatedBet }
        stateToChange[e.target.id] = e.target.value;
        setUpdatedBet(stateToChange)
    }
    const editABet = (e) => {
        const betToEdit = {
            id: parseInt(id),
            toBetAmount: parseInt(updatedBet.toBetAmount),
        }
        setIsLoading(true);
        editBet(betToEdit);
        setIsLoading(false);
        history.goBack();
    }

    return (
        <>
            <Container>
                <h3> Edit Your Bet </h3>
                <InputGroup className="mb-3">
                    <FormControl
                        htmlFor="toBetAmount"
                        className="p-2 bd-highlight justify-content-center"
                        defaultValue={updatedBet.toBetAmount}
                        onChange={handleEditFieldChange}
                        type="number"
                        name="toBetAmount"
                        id="toBetAmount"
                    />
                    <InputGroup.Append>
                        <Button isLoading={isLoading} variant="outline-secondary"
                            onClick={editABet}>
                            {'Submit'}
                        </Button>
                        <Button isLoading={isLoading} variant="outline-secondary"
                            onClick={() => history.goBack()}>
                            {'Cancel'}
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </Container>
        </>
    )
};

export default EditBet;