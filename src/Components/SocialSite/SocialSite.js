import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const SocialSite = () => {
    return (
        <div>
            <a href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
            <a href="https://www.twitter.com/" target="_blank"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
            <a href="https://www.youtube.com/" target="_blank"><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a>
        </div>
    );
};

export default SocialSite;