import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { BetContext } from "../../providers/BetProvider";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

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
            <Form>
                <h3> Edit Your Bet </h3>
                <FormGroup>
                    <Label htmlFor="toBetAmount"><strong>Bet Amount</strong></Label>
                    <Input className="p-2 bd-highlight justify-content-center"
                        defaultValue={updatedBet.toBetAmount}
                        onChange={handleEditFieldChange}
                        type="number"
                        name="toBetAmount"
                        id="toBetAmount"
                    />
                </FormGroup>
            </Form >
            <Button block className="editBet" type="button" color="success" isLoading={isLoading}
                onClick={editABet}>
                {'Submit'}
            </Button>
            <Button block className="cancelEdit" type="button" color="danger" isLoading={isLoading}
                onClick={() => history.goBack()}>
                {'Cancel'}
            </Button>
        </>
    )
};

export default EditBet;