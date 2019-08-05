import React from 'react';
import style from '../../css/CarouselItem.module.css';

const CarouselItem = ({property, match}) => {
    console.log(match);
    const {id, image, city, address, bedrooms, bathrooms, carSpaces, latitude, longitude} = property;
    return (
      <div id={`card-${id}`} className={style.card}>
          <img src={image} alt={city}/>
          <div className={style.details}>
              <span className={style.index}>{id + 1}
              </span>
              <p className={style.location}>
                  {city}<br/>
                  {address}
              </p>
              <ul className={style.features}>
                  <li className={style.iconBed}>{bedrooms} <span>bedrooms</span></li>
                  <li className={style.iconBath}>{bathrooms} <span>bathrooms</span></li>
                  <li className={style.iconCar}>{carSpaces} <span>parking spots</span></li>
                  <li className={style.iconLoc}>{`${latitude} ${longitude}`} <span>map</span></li>
              </ul>
          </div>
      </div>
    )
};

export default CarouselItem;