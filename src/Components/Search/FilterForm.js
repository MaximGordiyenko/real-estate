import React from 'react';
import style from '../../css/SearchField.module.css';

const FilterForm = ({filter, handleFilter}) => {
    return (
        <div className={style.wrapper}>
            <input className={style.input}
                   type="text"
                   value={filter}
                   onChange={handleFilter}
            />
        </div>
    );
};
    export default FilterForm;