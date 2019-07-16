import React, {Component} from 'react';
import FilterForm from "../Search/FilterForm";
import {filterByTitle} from "../../utils/filterMovie";
import CardList from "./CardList";

class CardsPage extends Component {
    state = {
        filter: '',
    };

    handleFilter = event => {
        this.setState({
            filter: event.target.value,
        });
    };

    render() {
        const {filter} = this.state;
        const filterTitle = filterByTitle(filter);

        return (
            <>
                <FilterForm filter={filter}
                            handleFilter={this.handleFilter}
                />
                <CardList movies={filterTitle}
                          match={this.props.match}/>

            </>
        );
    }
}

export default CardsPage;