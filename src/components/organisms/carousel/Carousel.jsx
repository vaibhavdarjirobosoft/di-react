import React, { useState, useEffect } from 'react';
import Link from "components/atoms/link/Link";
import Image from "components/atoms/image/Image";
import CarouselText from "components/molecules/carouselText/CarouselText";
import "./style.css";

const content = [
    {
        heading: "Star Vs Food",
        subHeading: "Bollywood celebs & chefs rustle up a special meal for close friends and family.",
        tag1: "New",
        tag2: "Don't Miss",
        image: "starvsfood.jpeg"
    },
    {
        
        heading: "India 2050",
        subHeading: "A forecast into an imaginary future of India if we continue on our current path.",
        tag1: "Recommended",
        tag2: "Trending",
        image: "india2050.jpeg"
    },
    {
        heading: "The Vaccine: Conquering Covid",
        subHeading: "The race to develop a vaccine for Covid-19 is a monumental feat of science.",
        tag1: "Editor's Pick",
        tag2: "Must Watch",
        image: "vaccine.jpeg"
    },
    {
        heading: "90 Day Fiance: The Other Way",
        subHeading: "Americans uproot their lives and move to a foreign country for love.",
        tag1: "All Time Fave",
        tag2: "Try Now",
        image: "ninetydaysfiance.jpeg"
    }
];

const Carousel = () => {
    const [activeContent, setActiveContent] = useState(0);

    useEffect(() => {
        const next = (activeContent + 1) % content.length;
        const id = setTimeout(() => setActiveContent(next), 3000);
        return () => clearTimeout(id);
    }, [activeContent])

    const onClickItem = event => {
        event.preventDefault();
        setActiveContent(Number(event.target.getAttribute('data-index')) || 0);
    }
    

    const onPrevious = event => {
        event.preventDefault();
        setActiveContent(!!activeContent ? activeContent -1 : content.length - 1);
    };

    const onNext = event => {
        event.preventDefault();
        if (activeContent === content.length - 1) {
            setActiveContent(0);
        } else {
            setActiveContent(activeContent + 1);
        }
    };
    return (
        <React.Fragment>
            <div className="carousel">
                <Link 
                    text={<Image location="/previous.png" alt="Discovery" />} 
                    url="/" 
                    onClick={onPrevious} 
                    active="nav" 
                    className="nav-icon"/>
                <CarouselText content={content[activeContent]}/>
                <div>
                    <Image 
                        className="border-rad-10" 
                        location={content[activeContent].image}
                        alt={content[activeContent].heading}
                        width={875} 
                        height={490} 
                    />
                </div>
                
                <Link 
                    text={<Image location="/next.png" alt="Discovery"/>} 
                    url="/" 
                    onClick={onNext} 
                    active="nav" 
                    className="nav-icon"
                />
            </div>
            <div className="carousel-indicator">
                {
                    content.map((_, index) => (
                        <Link 
                            key={index} 
                            url="/"
                            className={activeContent === index ? "carousel-indicator-active" : "carousel-indicator-inactive"}
                            data-index={index}
                            onClick={onClickItem}
                        />
                    ))
                }
            </div>
        </React.Fragment>
    );
};

export default Carousel;