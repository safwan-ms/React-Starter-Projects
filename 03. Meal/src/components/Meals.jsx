import "../style.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Meals = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        console.log(res);
        setItems(res.data.meals);
      })
      .catch((err) => err);
  }, []);

  const itemList = items.map(({ idMeal, strMeal, strMealThumb }) => {
    return (
      <section className="card">
        <img src={strMealThumb} alt="strMealThumb" />
        <section className="content" key={idMeal}>
          <p>{strMeal}</p>
          <p>{idMeal}</p>
        </section>
      </section>
    );
  });
  return <div className="items-container"> {itemList} </div>;
};

export default Meals;
