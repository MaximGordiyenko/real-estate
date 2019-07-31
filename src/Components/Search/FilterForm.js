import React from 'react';
import style from '../../css/FilterForm.module.css';

const FilterForm = ({filter, handleFilter}) => {
    return (
        <div className={style.wrapper}>
            <input className={style.input}
                   type="search"
                   value={filter}
                   placeholder='Please, type the rent or apartment'
                   onChange={handleFilter}
            />
        </div>
    );
};
    export default FilterForm;