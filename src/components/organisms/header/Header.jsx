import React from 'react';
import Logo from "components/molecules/logo/Logo";
import NavLinks from "components/molecules/navLink/NavLink";
import Search from "components/molecules/search/Search";
import "./style.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header-toolbar">
                <Logo content={{
                    logo: "discovery-logo.png",
                    logoAlt: "Discovery",
                    list: "items.jpg",
                    listAlt: "List"
                }}
                />
                <NavLinks content={["Home","Explore","Shorts", "MindBlown", "Kids", "Premium"]}/>
                <div className="grow">
                </div>
                <Search content={{
                        placeHolder: "Search for shows, episodes, shorts etc.",
                        button: "Sign In"
                    }}
                    />
            </div>
        </div>
    );
};

export default Header;