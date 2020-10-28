let teamCollection = []

const getTeamData = () => {
    return fetch("https://api.the-odds-api.com/v3/sports?apiKey=e41356749169d3c9782c88e9aecc16b3")
        .then((httpResponse) => {
            return httpResponse.json()
        }
        ).then((arrayOfTeams) => {
            teamCollection = arrayOfTeams
        }
        )
};

console.log(teamCollection);