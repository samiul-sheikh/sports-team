import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const TeamDetails = () => {
    const { idTeam } = useParams()

    const [team, setTeam] = useState({});

    const { strTeamBanner, strTeam, intFormedYear, strCountry, strSport, strGender, strDescriptionEN } = team;

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [])

    return (
        <div>
            <h3>Team Details</h3>
            <img src={strTeamBanner} alt="" />
            <p>{strTeam}</p>
            <p>Founded:{intFormedYear}</p>
            <p>Country:{strCountry}</p>
            <p>Sport Type:{strSport}</p>
            <p>Gender:{strGender}</p>
            <p>Description:{strDescriptionEN}</p>

        </div>
    );
};

export default TeamDetails;