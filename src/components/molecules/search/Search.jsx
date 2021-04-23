import React from 'react';
import Input from "components/atoms/input/Input";
import Button from "components/atoms/button/Button";
import "./style.css";

const Search = ({ content }) => {
    return (
        <div className="search">
            <Input className="search-input" placeHolder={content.placeHolder}/>
            <Button name={content.button} type="submit" />
        </div>
    );
};

export default Search;