import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { TeamContext } from "../../providers/TeamProvider";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const EditTeam = () => {
    const { id } = useParams();
    const history = useHistory();
    const { editTeam, getTeam } = useContext(TeamContext);
    const [isLoading, setIsLoading] = useState(false);
    const [updatedTeam, setUpdatedTeam] = useState({})

    useEffect(() => {
        getTeam(id).then(setUpdatedTeam);
    }, [])

    const handleEditFieldChange = (e) => {
        const stateToChange = { ...updatedTeam }
        stateToChange[e.target.id] = e.target.value;
        setUpdatedTeam(stateToChange)
    }
    const editATeam = (e) => {
        const teamToSave = {
            id: parseInt(id),
            name: updatedTeam.name,
            odds: parseInt(updatedTeam.odds),
            imageLocation: updatedTeam.imageLocation,
            fact: updatedTeam.fact
        };
        setIsLoading(true);
        editTeam(teamToSave);
        setIsLoading(false);
        history.goBack();
    }

    return (
        <>
            <Form>
                <h3> Adjust {updatedTeam.name}' Odds </h3>
                <FormGroup>
                    <Label htmlFor="odds"><strong>Current Odds</strong></Label>
                    <Input className="p-2 bd-highlight justify-content-center"
                        defaultValue={updatedTeam.odds}
                        onChange={handleEditFieldChange}
                        type="number"
                        name="odds"
                        id="odds"
                    />
                </FormGroup>
            </Form >
            <Button block className="editTeam" type="button" isLoading={isLoading}
                onClick={editATeam}>
                {'Submit'}
            </Button>
            <Button block className="cancelEdit" type="button" isLoading={isLoading}
                onClick={() => history.goBack()}>
                {'Cancel'}
            </Button>
        </>
    )
};

export default EditTeam;
