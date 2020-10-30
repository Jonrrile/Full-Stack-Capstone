import React, { useState } from "react";
import * as firebase from "firebase/app";

export const BetContext = React.createContext();

export const BetProvider = (props) => {
    const [bets, setBets] = useState([]);
    const getToken = () => firebase.auth().currentUser.getIdToken();

    const getAllBetsForTeam = (teamId) => {
        return getToken().then((token) => {
            fetch(`/api/bet/getallbetsbyteam/${teamId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json()).then(setBets);
        })
    };

    const placeBet = (newBet) => {
        return getToken().then((token) => {
            fetch("/api/bet/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(newBet)
            })
        })
    };

    const getBetById = (betId) => {
        return getToken().then((token) =>
            fetch(`/api/bet/${betId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json()))
    };

    const deleteBet = (betId) => {
        return getToken().then((token) => {
            fetch(`/api/bet/${betId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })
    }

    const editBet = (bet) => {
        return getToken().then((token) => {
            fetch(`/api/bet/${bet.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(bet)
            })
        })
    }

    return (
        <BetContext.Provider value={{
            bets, getAllBetsForTeam, placeBet, getBetById,
            deleteBet, editBet
        }}>
            {props.children}
        </BetContext.Provider>
    );
};