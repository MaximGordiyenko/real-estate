import React from 'react';
import style from '../../css/Investors.module.css'

const Investors = ({match ,title}) => {
    console.log(match);
    return (
      <div className="">
          <p className={style.title}>{title}</p>
      </div>
    );
};

export default Investors;