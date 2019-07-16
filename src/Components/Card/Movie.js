import React from 'react';
// import {Route} from 'react-router-dom';
// import Home from "../Head/Home";
import movies from "../../api/movies";

const Movie = ({match}) => {
    const newParam = Number(Object.values(match.params));
    const itemList = movies.map(e => e);
    let found_object = null;
    itemList.forEach((item) => {
        if (item.id === newParam) {
            found_object = item;
        }
    });
    if (found_object === null) {
        return null;
    }
    return (
      <div>
          <h2>{found_object.title}</h2>
          <p>{found_object.description}</p>
          {/*<Route path={`${match.path}/:subId`} component={Home}/>*/}
      </div>
    );
};
export default Movie;