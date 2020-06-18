import React from 'react';
import {Link} from 'react-router-dom';
import style from '../../css/CardList.module.css';
import Card from "./Card";

const CardList = ({data, match}) => {
    console.log("card list match:", match);
    return (
      <>
          <div className={style.list}>
              {data.map(({id, title, image, description, price}) => (
                <Link className={style.item}
                      to={`${match.url}/${id}`}
                      key={id}>
                    <Card title={title}
                          image={image}
                          description={description}
                          price={price}
                    />
                </Link>
              ))}
          </div>
      </>
    );
};
export default CardList;