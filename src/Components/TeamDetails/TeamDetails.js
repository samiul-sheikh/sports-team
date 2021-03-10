import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const TeamDetails = () => {
    const { idTeam } = useParams()

    const [team, setTeam] = useState({});

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams))
    }, [])

    return (
        <div>
            <h3>Team Details</h3>
            <p>{team[0].strSport}</p>
        </div>
    );
};

export default TeamDetails;