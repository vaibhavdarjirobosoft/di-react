import React from 'react';
import Image from "components/atoms/image/Image";
import Text from "components/atoms/text/Text";
import "./style.css"

const CategoryCard = ({ category }) => {
    return (
        <div className="category-card">
            <Image className="border-rad-10" location={category.image} width={202} height={125}/>
            <div className="category-text-position"><Text content={category.text} type="category-text" /></div>
            
        </div>
    );
};

export default CategoryCard;