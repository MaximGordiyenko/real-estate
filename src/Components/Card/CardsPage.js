import React, {Component} from 'react';
import FilterForm from "../Search/FilterForm";
import CardList from "./CardList";
import Carousel from "../Carousel/Carousel";
import data from "../../api/movies";
import style from '../../css/CardsPage.module.css'
import ScrollButton from "../ScrollButton";

class CardsPage extends Component {
    state = {
        filter: '',
        data: data,
        currentPage: 1,
        cardsPerPage: 10,
        // sortValue: data
    };
    //EDIT
    handleSort = ascending => {
        this.setState( {
            sortValue: ascending
              ? this.state.data.sort((a,b) => (parseFloat(a.price) - parseFloat(b.price)))
              : this.state.data.sort((a,b) => (parseFloat(b.price) - parseFloat(a.price)))
        } )
    };

    sortByPriceAsc() {
        const sortedPrice = data.map(item => Number(item.price.substr(1).replace(/[ ,.]/g, ''))).sort((a, b) => (b - a));
        this.setState({
            data: this.state.data.sort((a, b) => (a.price - b.price))
        });
    }

    sortByPriceDesc() {
        this.setState({
            data: this.state.data.map(item => Number(item.price.substr(1).replace(/[ ,.]/g, ''))).sort((a, b) => (b - a))
        });
    }
    //END EDIT
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
        //EDIT
        const newstr = data.map(item => Number(item.price.substr(1).replace(/[ ,.]/g, ''))).sort((a, b) => (b - a));
        console.log(newstr);
        let obj = [...this.state.data];
        console.log('obj', obj);
        obj.sort((a, b) => a.price - b.price);
        console.log('obj sored', obj);
        obj.map((item, i) => (<div key={i}> {item.id}
            {item.price} {item.description}</div>));
        let sortValue = 1 < 0 ? this.state.data.sort((a,b) => (parseFloat(a.price) - parseFloat(b.price)))
          : this.state.data.sort((a,b) => (parseFloat(b.price) - parseFloat(a.price)))
        console.log(sortValue);
        //END EDIT
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

              {/*EDIT*/}
              {/*<div>*/}
              {/*    <button onClick={this.handleSort(true)}>sortByPriceAsc</button>*/}
              {/*    <button onClick={this.handleSort(false)}>sortByPriceDesc</button>*/}
              {/*</div>*/}
              {/*END EDIT*/}

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