import React from 'react';
import Image from "components/atoms/image/Image";
import Link from "components/atoms/link/Link";
import "./style.css";


const Logo = ({ content }) => {
    return (
        <div className="logo">
            <Image 
                location={content.list}
                alt={content.listAlt || 'list'}
                className="hamburger"
            />
            <Link text={<Image location={content.logo} alt={content.logoAlt} className="app-logo"/>} location="/" active="text-link-active"/>
        </div>
    );
};

export default Logo;