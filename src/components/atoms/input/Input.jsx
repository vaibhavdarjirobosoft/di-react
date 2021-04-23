import React from 'react';
import "./style.css";

const Input = ({ className, placeHolder, value }) => {
    return (
        <input 
            className={className}
            placeholder={placeHolder}
            autoComplete="off"
            maxLength="100"
            type="text"
            value={value}
        />
    );
};

export default Input;