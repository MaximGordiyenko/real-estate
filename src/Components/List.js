import React from 'react';
import style from '.././css/Sort.module.css';

const List = ({data, orderBy}) => {
    console.log('data', data, 'orderBy', orderBy);
    const categories = ["title", "price", "city", "address"];
    const output = categories.map((item) => {
        console.log('list dataItem', data[item]);
        return <div key={item}>
            <small className={orderBy === item ? style.active : null}
            >{item}:
            </small>
            {data[item]}
        </div>
    });
    return (
      <div className="media">
          <div className="media-left">
              <img className={style.image}
                   src={data.image}
                   alt={`${data.title}`}/>
          </div>
          <div className="media-body">
              <h4 className="media-heading">
                  <span className={orderBy === "city" ? style.active : null}>{data.city} </span>
                  <span className={orderBy === "title" ? style.active : null}>{data.title}</span>
              </h4>
              <div><small>description:</small> {data.description}</div>
              {output}
              <div><small>address:</small> <a href={data.address}> {data.address} </a></div>
          </div>
      </div>
    );
};

export default List;