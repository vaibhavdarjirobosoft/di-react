import React from 'react';
import "./style.css";

const Text = ({ content, type }) => {
    return (
        <p className={`text text-${type}`}>
            { content }
        </p>
    );
};

Text.defaultProps = {
    type: "btn"
}

export default Text;