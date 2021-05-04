import React from 'react';
import Header from "components/organisms/header/Header";
import Carousel from "components/organisms/carousel/Carousel";
import Category from "components/organisms/category/Category";

const Template = () => {
    return (
        <React.Fragment>
            <Header/>
            <Carousel/>
            <Category/>
        </React.Fragment>
    );
};

export default Template;