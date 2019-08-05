import React from 'react';
import {Link} from 'react-router-dom';
import style from "../../css/CardView.module.css";
import movies from "../../api/movies";
import PreOrder from "../PreOrder";
import CommentBox from "../Comments/CommentBox";
// import NewPost from "../Post/NewPost";

const CardView = ({match}) => {
    let matchId = Number(Object.values(match.params));
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
          <Link className={style.back}
                to='/movies'>Back</Link>
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
              <PreOrder/>
              <CommentBox/>
              {/*<NewPost/>*/}
          </div>
      </div>
    )
};

export default CardView;