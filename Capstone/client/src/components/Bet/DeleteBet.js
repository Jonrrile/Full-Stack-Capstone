import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Card, CardBody, Button } from "reactstrap";
import { UserProfileContext } from "../../providers/UserProfileProvider";
import { BetContext } from "../../providers/BetProvider";

const DeleteBet = () => {
    const { id } = useParams();
    const history = useHistory();
    const { deleteBet, getBetById } = useContext(BetContext);

    useEffect(() => {
        getBetById(id);
    }, [])

    const deleteABet = () => {
        deleteBet(id).then(history.goBack())
    }

    return (
        <>
            <div>
                <h3>Are you sure you want to delete this bet? </h3>
                <Button block className="deleteBetButton" type="button" color="danger"
                    onClick={deleteABet}>
                    {'Delete Bet'}
                </Button>
                <Button block className="returnToListButton" type="button" color="success"
                    onClick={() => history.goBack()}>
                    {'Cancel'}
                </Button>
            </div>
        </>
    )
};

export default DeleteBet;