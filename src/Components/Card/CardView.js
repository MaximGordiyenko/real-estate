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
  console.log(`${window.location.origin}/${image}`);
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <button className={style.learn_more}>
    <span className={style.circle} aria-hidden="true">
      <span className={`${style.icon} ${style.arrow}`}/>
    </span>
          <Link to='/movies'><span className={style.button_text}>Back</span></Link>
        </button>
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