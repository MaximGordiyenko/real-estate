import React, {Component} from 'react';
import FilterForm from "../Search/FilterForm";
import CardList from "./CardList";
import Carousel from "../Carousel/Carousel";
import data from "../../api/movies";
import style from '../../css/CardsPage.module.css'
import ScrollButton from "../ScrollButton";
import Sort from "../Sort";

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
        const currentItems = data.map(item => item).slice(indexOfFirstTodo, indexOfLastTodo);
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

        const filterByTitle = (item) =>
          currentItems.filter(movies =>
            movies.title.toLocaleLowerCase().includes(item.toLowerCase()));

        const {filter} = this.state;
        return (
          <>
              <Carousel/>
              <FilterForm filter={filter}
                          handleFilter={this.handleFilter}

              />
              {/*<Sort/>*/}
              <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
              <CardList movies={filterByTitle(filter)}
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