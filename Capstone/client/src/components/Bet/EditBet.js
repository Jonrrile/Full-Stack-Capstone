import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { BetContext } from "../../providers/BetProvider";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const EditBet = () => {
    const { id } = useParams(); //Url parameters for commentId
    const history = useHistory();
    const { editBet, getBetById } = useContext(BetContext); //Pulling from Context
    const [isLoading, setIsLoading] = useState(false);
    const [updatedBet, setUpdatedBet] = useState({}) //Setting new comment after updated

    useEffect(() => { //Every time the page is loaded essentially
        getBetById(id).then(setUpdatedBet); //Get the ID then populate the fields with the existing values
    }, [])

    const handleEditFieldChange = (e) => { //Affordance for when values are updated in the input
        const stateToChange = { ...updatedBet }
        stateToChange[e.target.id] = e.target.value;
        setUpdatedBet(stateToChange)
    }

    const editABet = (e) => {
        setIsLoading(true);
        editBet(updatedBet);
        setIsLoading(false);
        history.goBack();
    }

    return (
        <>
            <Form>
                <h3> Edit Your Bet </h3>
                <FormGroup>
                    <Label htmlFor="amount"><strong>Bet Amount</strong></Label>
                    <Input className="p-2 bd-highlight justify-content-center"
                        defaultValue={updatedBet.toBetAmount}
                        onChange={handleEditFieldChange}
                        type="number"
                        name="amount"
                        id="amount"
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