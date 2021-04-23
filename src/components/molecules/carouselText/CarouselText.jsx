import React from 'react';
import Text from "components/atoms/text/Text";
import Image from "components/atoms/image/Image";
import Link from "components/atoms/link/Link";
import "./style.css";

const CarouselText = ({ content }) => {
    return (
        <div className="carousel-text">
            <div>
                <Text content={content.heading} type="carousel-heading"/>
            </div>
            <div className="padding-top-14">
                <Text content={content.subHeading} type="carousel-subheading"/>
            </div>
            <div className="margin-tb-18">
                <Text content={content.tag1} type="carousel-tags"/>
                <Text content={content.tag2} type="carousel-tags"/>
            </div>
            <div className="play-button">
                <Image location="play-button-5.png" width={92} height={67} alt={content.heading}/>
                <Link text="Play" url="/" active="carousel-play"  />
            </div>
        </div>
    );
};

export default CarouselText;