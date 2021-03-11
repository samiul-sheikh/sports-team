import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Team from '../Team/Team';
import background from '../../images/background/background.jpg'

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
            <Card className="text-center text-white">
                <Card.Img src={background} alt="Card image" style={{height:'300px', width:'100%'}} />
                <Card.ImgOverlay>
                    <h1>Sports Team</h1>
                </Card.ImgOverlay>
            </Card>

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