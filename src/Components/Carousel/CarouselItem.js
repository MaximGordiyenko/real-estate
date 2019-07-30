import React from 'react';
import style from '../../css/CarouselItem.module.css';

const CarouselItem = ({property}) => {
    const {index, picture, city, address, bedrooms, bathrooms, carSpaces} = property;
    return (
      <div id={`${style.card}-${index}`} className={style.card}>
          <img src={picture} alt={city}/>
          <div className={style.details}>
              <span className={style.index}>{index + 1}</span>
              <p className={style.location}>
                  {city}<br/>
                  {address}
              </p>
              <ul className={style.features}>
                  <li className={style.iconBed}>{bedrooms} <span>bedrooms</span></li>
                  <li className={style.iconBath}>{bathrooms} <span>bathrooms</span></li>
                  <li className={style.iconCar}>{carSpaces} <span>parking spots</span></li>
              </ul>
          </div>
      </div>
    )
};

export default CarouselItem;