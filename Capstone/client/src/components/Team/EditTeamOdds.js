import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { TeamContext } from "../../providers/TeamProvider";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const EditTeam = () => {
    const { id } = useParams(); //Url parameters for commentId
    const history = useHistory();
    const { editTeam, getTeam } = useContext(TeamContext); //Pulling from Context
    const [isLoading, setIsLoading] = useState(false);
    const [updatedTeam, setUpdatedTeam] = useState({}) //Setting new comment after updated

    useEffect(() => { //Every time the page is loaded essentially
        getTeam(id).then(setUpdatedTeam); //Get the ID then populate the fields with the existing values
    }, [])

    const handleEditFieldChange = (e) => { //Affordance for when values are updated in the input
        const stateToChange = { ...updatedTeam }
        stateToChange[e.target.id] = e.target.value;
        setUpdatedTeam(stateToChange)
    }
    //team to save copy from updated team with new object
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
                {/* <FormGroup>
                    <img src={updatedTeam.imageLocation}></img>
                    <br />
                    <Label htmlFor="subject"><strong>Team</strong></Label>
                    <Input className="p-2 bd-highlight justify-content-center"
                        defaultValue={updatedTeam.name}
                        onChange={handleEditFieldChange}
                        type="text"
                        name="subject"
                        id="subject"
                    />
                </FormGroup> */}
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
                {/* <FormGroup>
                    <Input
                        defaultValue={updatedTeam.fact}
                        onChange={handleEditFieldChange}
                        type="textarea" />
                </FormGroup>
                <FormGroup>
                    <Input
                        defaultValue={updatedTeam.imageLocation}
                        onChange={handleEditFieldChange}
                        type="text" />
                </FormGroup> */}
            </Form >
            <Button block className="editTeam" type="button" color="success" isLoading={isLoading}
                onClick={editATeam}>
                {'Submit'}
            </Button>
            <Button block className="cancelEdit" type="button" color="danger" isLoading={isLoading}
                onClick={() => history.goBack()}>
                {'Cancel'}
            </Button>
        </>
    )
};

export default EditTeam;
