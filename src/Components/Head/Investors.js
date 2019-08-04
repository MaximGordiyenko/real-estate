import React from 'react';
import investors from "../../api/investors";

const Investors = ({match}) => {
    console.log(match);
    let matchId = Number(Object.values(match.params));
    const itemList = investors.map(e => e);
    let found_object = null;
    itemList.forEach((item) => {
        if (item.id === matchId) {
            found_object = item;
        }
    });
    const {title} = found_object;

    return (
      <div className="">
          <h3>{match.params.id}</h3>
          <h3>{title}</h3>
      </div>
    );
};

export default Investors;