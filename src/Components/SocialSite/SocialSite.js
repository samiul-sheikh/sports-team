import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const SocialSite = () => {
    return (
        <div>
            <h3>This is social site</h3>
            <span> <Link to="/none"><FontAwesomeIcon icon={faFacebook} /></Link></span>
            <span> <Link to="/none"><FontAwesomeIcon icon={faTwitter} /></Link></span>
            <span> <Link to="/none"><FontAwesomeIcon icon={faYoutube} /></Link></span>
        </div>
    );
};

export default SocialSite;