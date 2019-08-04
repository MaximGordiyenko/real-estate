import React, {Component} from 'react';
import FilterForm from "../Search/FilterForm";
import CardList from "./CardList";
import Carousel from "../Carousel/Carousel";
import data from "../../api/movies";
import style from '../../css/CardsPage.module.css'
import ScrollButton from "../Buttons/ScrollButton";
import SortButtonID from "../Buttons/SortButtonID";
import SortButtonPrice from "../Buttons/SortButtonPrice";


const dataParser = ({...obj}, {...callbacks}) => {
    let result = {};
    for (let i in obj) {
        let name = i;
        let val = obj[i];
        let callb = callbacks[name];
        result[`${name}`] = callb ? callb(val) : val;
    }
    return result
};

let callbacks = {
    price: (n) => Number(n.replace(/[^0-9.-]+/g, ""))
};

let datas = data.map(i => dataParser(i, callbacks));

const sortDown = (arr, value, isSort = true) => isSort ?
  arr.sort(
    (a, b) => (a[value] > b[value]) ? 1 : ((b[value] > a[value]) ? -1 : 0))
  : arr.sort(
    (a, b) => (a[value] <= b[value]) ? 1 : ((b[value] <= a[value]) ? -1 : 0)
  );

class CardsPage extends Component {
    state = {
        filter: '',
        data: data,
        currentPage: 1,
        cardsPerPage: 10,
        isSort: false
    };

    sortByID = () => {
        const {isSort} = this.state;
        console.log(isSort);
        this.setState(prevState => ({
            data: sortDown(datas, "id", isSort),
            isSort: !prevState.isSort
        }));
    };

    sortByPrice = () => {
        const {isSort} = this.state;
        console.log(isSort);
        this.setState(prevState => ({
            data: sortDown(datas, "price", isSort),
            isSort: !prevState.isSort
        }));
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
        const {data, currentPage, cardsPerPage, isSort, filter} = this.state;
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
        return (
          <>
              <Carousel/>
              <FilterForm filter={filter}
                          handleFilter={this.handleFilter}

              />
              <div className={style.btnWrapper}>
                  <SortButtonID handler={() => this.sortByID()}
                                isSort={isSort}
                  />
                  <SortButtonPrice handler={() => this.sortByPrice()}
                                   isSort={isSort}
                  />
              </div>

              <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
              <CardList data={filterByTitle(filter)}
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

