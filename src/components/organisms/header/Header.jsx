import React from 'react';
import Logo from "components/molecules/logo/Logo";
import NavLinks from "components/molecules/navLink/NavLink";
import Search from "components/molecules/search/Search";
import "./style.css";

const Header = () => {
    return (
        <div className="header">
            <Logo content={{
                logo: "discovery-logo.png",
                logoAlt: "Discovery",
                list: "items.jpg",
                listAlt: "List"
            }}
            />
            <NavLinks content={["Home","Explore","Shorts", "MindBlown", "Kids", "Premium"]}/>
            <Search content={{
                placeHolder: "Search for shows, episodes, shorts etc.",
                button: "Sign In"
            }}
            />
        </div>
    );
};

export default Header;