import React, {Component} from 'react';
import FilterForm from "../Search/FilterForm";
import {filterByTitle} from "../../utils/filterMovie";
import CardList from "./CardList";
import Carousel from "../Carousel/Carousel";
import data from "../../api/movies";
import style from '../../css/CardsPage.module.css'

class CardsPage extends Component {
    state = {
        filter: '',
        data: data,
        currentPage: 1,
        cardsPerPage: 10
    };

    handlePagination = event => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    };


    handleFilter = event => {
        this.setState({
            filter: event.target.value,
        });
    };

    render() {
        const {data, currentPage, cardsPerPage} = this.state;
        const indexOfLastTodo = currentPage * cardsPerPage;
        const indexOfFirstTodo = indexOfLastTodo - cardsPerPage;
        const currentTodos = data.map(item => item).slice(indexOfFirstTodo, indexOfLastTodo);
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(data.length / cardsPerPage); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
              <li className={style.listPagination}
                  key={number}
                  id={number}
                  onClick={this.handlePagination}
              >
                  {number}
              </li>
            );
        });

        const {filter} = this.state;
        // const filterTitle = filterByTitle(filter);

        return (
          <>
              <Carousel/>
              <FilterForm filter={filter}
                          handleFilter={this.handleFilter}
                          handlePagination={this.handlePagination}
              />
              <CardList movies={currentTodos}
                        match={this.props.match}
              />
              <div className={style.centerPagination}>
                  <ul className={style.pagination}>
                      {renderPageNumbers}
                  </ul>
              </div>
          </>
        );
    }
}

export default CardsPage;