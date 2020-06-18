/*DESCRIBE ONE ELEMENT*/
import React from 'react';
import style from '../../css/Card.module.css'

const Card = ({title, image, description, price}) => {
  return (
    <div className={style.wrapper}>
        <h2 className={style.header}>{title}</h2>
        <img className={style.image}
             src={image}
             alt={title}
        />
        <p className={style.desc}>{description}</p>
        <p className={style.price}>{price}</p>
    </div>
)};
export default Card;