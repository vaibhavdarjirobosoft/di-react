import React from 'react';
import PropTypes from 'prop-types';
import Text from "components/atoms/text/Text";
import "./style.css";

const Link = ({ url, text, className, active, onClick, ...rest }) => {
    return (
        <a href={url} className={`link ${className}`} onClick={onClick} {...rest}>
            <Text content={text} type={active}/>
        </a>
    )
};

Link.propTypes = {
    text: PropTypes.any,
    url: PropTypes.string,
    onClick: PropTypes.func
};

Link.defaultProps = {
    className: '',
    onClick: () => {}
}

export default Link;