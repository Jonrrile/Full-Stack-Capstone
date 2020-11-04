import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { BetContext } from "../../providers/BetProvider";

const DeleteBet = () => {
    const { id } = useParams();
    const history = useHistory();
    const { deleteBet, getBetById } = useContext(BetContext);

    useEffect(() => {
        getBetById(id);
    }, [])

    const currentUser = JSON.parse(sessionStorage.getItem('userProfile')).id;
    console.log(currentUser);

    const deleteABet = () => {
        deleteBet(id).then(history.goBack())
    }



    return (
        <>
            <div>
                <h3>Are you sure you want to delete this bet?</h3>
                <Button variant="outline-danger"
                    onClick={deleteABet}>
                    {'Delete Bet'}
                </Button>
                <Button variant="outline-primary"
                    onClick={() => history.goBack()}>
                    {'Cancel'}
                </Button>
            </div>
        </>
    )
};

export default DeleteBet;