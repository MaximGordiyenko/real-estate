import React from 'react';
// import style from "../../css/Card.module.css";
import movies from "../../api/movies";

const CardView = ({match}) => {
    const matchId = Number(Object.values(match.params));
    const itemList = movies.map(e => e);
    let found_object = null;
    itemList.forEach((item) => {
        if (item.id === matchId) {
            found_object = item;
        }
    });
    if (found_object === null) {
        return null;
    }
    const {releaseDate, description, title, price, location, image} = found_object;
    return (
      <>
          <p>{releaseDate}</p>
          <p>{description}</p>
          <h2>{title}</h2>
          <p>{price}</p>
          <p>{location}</p>
          <img src={image} alt={found_object.title}/>
      </>
    )
};

export default CardView;