import React, { useState } from "react";
//import * as firebase from "firebase/app";

export const BetContext = React.createContext();

export const BetProvider = (props) => {
    const [bets, setBets] = useState([]);
    //const getToken = () => firebase.auth().currentUser.getIdToken();

    const getAllBetsForTeam = (teamId) => {
        //return getToken().then((token) => {
        fetch(`/api/bet/getallbetsbyteam/${teamId}`)//, {
            //method: "GET",
            //headers: {
            //  Authorization: `Bearer ${token}`
            //}

            .then(resp => resp.json()).then(setBets);
    };


    return (
        <BetContext.Provider value={{
            bets, getAllBetsForTeam
        }}>
            {props.children}
        </BetContext.Provider>
    );
}