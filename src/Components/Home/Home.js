import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Team from '../Team/Team';

const Home = () => {

    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])

    return (
        <div>
            <Container>
                <div className="row">
                    {
                        teams.map(team => <Team team={team}></Team>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Home;