import React from 'react';
import style from "../../css/CardView.module.css";
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
      <div className={style.wrapper}>
          <div className={style.container}>
              <h1 className={style.title}>{title}</h1>

              <div>
                  <img className={style.image}
                       src={`${window.location.origin}/${image}`}
                       alt={found_object.title}/>
                  <p> {description} Coast without TAX: <span>{price}. </span>
                                    Object was release: <span>{releaseDate}</span>
                  </p>
              </div>

              <p>{location}</p>
          </div>
      </div>
    )
};

export default CardView;