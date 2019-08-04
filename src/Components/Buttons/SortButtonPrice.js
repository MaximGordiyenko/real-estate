import React from 'react';
import style from '../../css/SortButton.module.css';

const SortButtonPrice = ({handler, isSort}) => {
    return (
      <div className={style.wrapper}>
          <button className='btn btn-light btn-sm'
                  type="button"
                  onClick={handler}>
              {isSort ? "Price Asc" : 'Price Desc'}
          </button>
      </div>
    );
};

export default SortButtonPrice;