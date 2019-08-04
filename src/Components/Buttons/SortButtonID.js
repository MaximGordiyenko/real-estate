import React from 'react';
import style from '../css/SortButton.module.css';

const SortButtonID = ({handler, isSort}) => {
    return (
      <div className={style.wrapper}>
          <button className='btn btn-light btn-sm'
            type="button"
            onClick={handler}>
              {isSort ? "ID Asc" : 'ID Desc'}
          </button>
      </div>
    );
};

export default SortButtonID;