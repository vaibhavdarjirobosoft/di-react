import React from 'react';
import Link from "components/atoms/link/Link";

import "./style.css";

const NavLink = ({ content }) => {
    return (
        <div className="nav-links">
            {
                content.map((link, index) => (
                    <Link
                        key={index}
                        text={link}
                        url="/"
                        active={!!index ? 'link': 'link-active'}
                    />
                ))
            }
        </div>
    );
};

export default NavLink;