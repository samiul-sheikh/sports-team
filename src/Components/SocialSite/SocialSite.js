import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const SocialSite = () => {
    return (
        <div>
            <span> <Link to="/none"><FontAwesomeIcon icon={faFacebook} /></Link></span>
            <span> <Link to="/none"><FontAwesomeIcon icon={faTwitter} /></Link></span>
            <span> <Link to="/none"><FontAwesomeIcon icon={faYoutube} /></Link></span>
        </div>
    );
};

export default SocialSite;