import React from 'react';

const Team = (props) => {

    const { strTeam, strSport, strTeamLogo } = props.team;

    return (
        <div>
            <h2>This is Team information</h2>
            <img src={strTeamLogo} alt="" />
            <h1>{strTeam}</h1>
            <h3>Sports Type: {strSport}</h3>
            <button>Explore</button>
        </div>
    );
};

export default Team;