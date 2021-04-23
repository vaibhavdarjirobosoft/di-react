import React from 'react';
import PropTypes from 'prop-types';
import Text from "components/atoms/text/Text";
import "./style.css"

const Button = ({ name, type, variant }) => {
    return (
        <button className={`btn btn-${variant}`} type={type}>
            <Text content={name}/>
        </button>
    );
};

Button.propTypes = {
    name: PropTypes.string,
    variant: PropTypes.string,
    type: PropTypes.string
};

Button.defaultProps = {
    variant: "primary"
}

export default Button;