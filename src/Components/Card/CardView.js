import React from 'react';
// import style from "../../css/Card.module.css";
import movies from "../../api/movies";

const CardView = ({match}) => {
    const matchId = Number(Object.values(match.params.id));
    const itemList = movies.map(e => e);
    let found_object = null;
    itemList.forEach((item) => {
        if (item.id === matchId) {
            found_object = item;
            console.log(found_object.image); //  poster/SPECTACULAR-OCEANFRONT.jpg
        }
    });
    if (found_object === null) {
        return null;
    }
    return (
      <div>
          <h2>{found_object.title}</h2>
          <p>{found_object.description}</p>
          <img src={found_object.image} alt={found_object.title}/>
          <p>{found_object.price}</p>
          <p>{found_object.location}</p>
          <p>{found_object.releaseDate}</p>
      </div>
    )
};

export default CardView;