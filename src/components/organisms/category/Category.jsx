import React from 'react';
import CategoryCard from "components/molecules/categoryCard/CategoryCard";
import "./style.css";

const categories = [
    {
      image: "adventures.jpg",
      text: "Adventures"
    },
    {
      image: "animals.jpg",
      text: "Animals"
    },
    {
      image: "nature.jpg",
      text: "Nature"
    },
    {
      image: "auto.jpg",
      text: "Auto"
    },
    {
      image: "food.jpg",
      text: "Food"
    },
    {
      image: "lifestyle.jpg",
      text: "Lifestyle"
    }
  ]

const Category = () => {
    return (
        <div className="category-wrapper">
            {
                categories.map((category, index) => (
                    <CategoryCard category={category} key={index}/>
                ))
            }
        </div>
    );
};

export default Category;