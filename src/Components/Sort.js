import React, {Component} from 'react';
import data from '../api/movies';
import Dropdawn from "./Dropdawn";
import List from "./List";

// import {_} from 'lodash';

class Sort extends Component {
    state = {
        data: data, // array of objects
        orderBy: "id",
        order: "asc",
        dropdownActive: true
    };

    toggle(e) {
        e.preventDefault();
        let isActive = this.state.dropdownActive;
        isActive = !isActive;
        this.setState({
            dropdownActive: isActive
        });
    }

    doOrderBy(e) {
        e.preventDefault();
        const newOrderBy = e.target.getAttribute('data-value');
        console.log('newOrderBy', newOrderBy);
        this.setState({
            orderBy: newOrderBy
        });
    }

    doOrder(e) {
        e.preventDefault();
        const newOrder = e.target.getAttribute('data-value');
        this.setState({
            order: newOrder
        });
    }

    render() {
        const orderBy = this.state.orderBy;
        const order = this.state.order;
        let sorted = this.state.data;

        // sorted = _.orderBy(sorted, (item) => {
        //     console.log('lodash', item[orderBy]);
        //     return item[orderBy]
        // }, order);

        const items = sorted.map((item) => {
            return <List data={item}
                         key={item.id}
                         orderBy={this.state.orderBy}
            />
        });
        console.log('items', items);
        return (
          <div className="container">
              <Dropdawn toggle={this.toggle}
                        dropdownActive={this.state.dropdownActive}
                        doOrderBy={this.doOrderBy}
                        doOrder={this.doOrder}
                        orderBy={this.state.orderBy}
                        order={this.state.order}/>
                        {items}
          </div>
        );
    }
}

export default Sort;