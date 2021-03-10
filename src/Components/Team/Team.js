import React from 'react';
import { useHistory } from 'react-router';

const Team = (props) => {

    const { idTeam, strTeam, strSport, strTeamLogo } = props.team;

    const history = useHistory();

    const teamDetails = idTeam => {
        const url = `/team/${idTeam}`;
        history.push(url);
    }

    return (
        <div>
            <h2>This is Team information</h2>
            <img src={strTeamLogo} alt="" />
            <h1>{strTeam}</h1>
            <h3>Sports Type: {strSport}</h3>
            <button onClick={() => teamDetails(idTeam)}>Explore</button>
        </div>
    );
};

export default Team;