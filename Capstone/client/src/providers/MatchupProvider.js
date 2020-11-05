import React, { useState, createContext, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const MatchupContext = createContext();

export const MatchupProvider = (props) => {
    const [matchups, setMatchups] = useState([]);
    const { getToken } = useContext(UserProfileContext);
    const apiUrl = "/api/matchup";

    const getAllMatchups = () =>
        getToken().then((token) =>
            fetch(apiUrl, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json())
                .then(setMatchups));

    return (
        <MatchupContext.Provider value={{ matchups, getAllMatchups }}>
            {props.children}
        </MatchupContext.Provider>
    );
};
