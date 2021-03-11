import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Team = (props) => {

    const { idTeam, strTeam, strSport, strTeamLogo } = props.team;

    const history = useHistory();

    const teamDetails = idTeam => {
        const url = `/team/${idTeam}`;
        history.push(url);
    }

    return (
        <div className="col-md-4 p-5 bg-info">
            <Card className="text-center" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={strTeamLogo} />
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>Sports Type: {strSport}</Card.Text>
                    <Button onClick={() => teamDetails(idTeam)} variant="primary">Explore</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Team;