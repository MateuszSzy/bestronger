import React from 'react';
import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <h1>Copyright <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2021 BeStronger</h1>
            </div>
        </div>
    );
};

export default Footer;