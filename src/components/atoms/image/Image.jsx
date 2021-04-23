import React from 'react';
import PropTypes from 'prop-types';
import "./style.css";

const Image = ({ location, alt, width=24, height, className }) => {
    return (
        <img 
            src={location}
            width={width}
            height={height}
            alt={alt}
            className={className}
        />
    );
};

Image.propTypes = {
    location: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
};

Image.defaultProps = {
    width: 24,
}
export default Image;