import React from 'react';
// import style from "../../css/Card.module.css";
import movies from "../../api/movies";

const CardView = ({match}) => {
    const itemList = movies.map(e => e);
    let found_object = null;
    const matchId = Number(Object.values(match.params.id));

    itemList.forEach((item) => {
        if (item.id === matchId) {
            console.log(found_object.image); //  poster/SPECTACULAR-OCEANFRONT.jpg
            found_object = item;
        }
    });
    if (found_object === null) {
        return null;
    }
    return (
      <div>
          <p>{found_object.releaseDate}</p>
          <p>{found_object.description}</p>
          <h2>{found_object.title}</h2>
          <p>{found_object.price}</p>
          <p>{found_object.location}</p>
          <img src={found_object.image} alt={found_object.title}/>
      </div>
    )
};

export default CardView;