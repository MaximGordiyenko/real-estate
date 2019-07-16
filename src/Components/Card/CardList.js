import React from 'react';
import {Link, Route} from 'react-router-dom';
import style from '../../css/CardList.module.css';
import Movie from "./Movie";
import Card from "./Card";

const CardList = ({movies, match}) => {
    return (
      <>
          <div className={style.list}>
              {movies.map(({id, title, image, description, price}) => (
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
          <Route path={`${match.path}/:moveId`} component={Movie}/>
      </>
    );
};
export default CardList;