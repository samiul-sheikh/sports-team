import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Team from '../Team/Team';

const Home = () => {

    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        // const url = 'https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328';
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])

    return (
        <div>
            <h2>This is Homepage</h2>
            <h3>Total Teams : {teams.length}</h3>
            {
                teams.map(team => <Team team={team}></Team>)
            }
        </div>
    );
};

export default Home;