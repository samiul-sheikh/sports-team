import React from 'react';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import SocialSite from '../SocialSite/SocialSite';
import male from '../../images/player/male.png';
import female from '../../images/player/female.png';

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
            <Container>
                <img src={strTeamBanner} alt="" />
                <div style={{ display: 'flex' }}>
                    <div>
                        <h1>{strTeam}</h1>
                        <p>Founded:{intFormedYear}</p>
                        <p>Country:{strCountry}</p>
                        <p>Sport Type:{strSport}</p>
                        <p>Gender:{strGender}</p>
                    </div>
                    <div>
                        {team.strGender === male ? <img src={female} /> : <img src={male} style={{ height: '200px', width: '200px' }} />}
                    </div>
                </div>

                <p>{strDescriptionEN}</p>
                <div className="text-center">
                    <SocialSite></SocialSite>
                </div>
            </Container>
        </div>
    );
};

export default TeamDetails;