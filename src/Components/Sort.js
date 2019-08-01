import React, {Component} from 'react';
import data from '../api/movies';
import Dropdawn from "./Dropdawn";
import List from "./List";

class Sort extends Component {
    state = {
        data: data, // array of objects
        orderBy: "first_name",
        order: "asc",
        dropdownActive: true
    };

    toggle(e){
        e.preventDefault();
        let isActive = this.state.dropdownActive;
        isActive = !isActive;
        this.setState({dropdownActive: isActive});
    }

    doOrderBy(e){
        e.preventDefault();
        const newOrderBy = e.target.getAttribute('data-value');
        this.setState({orderBy : newOrderBy});
    }

    doOrder(e){
        e.preventDefault();
        const newOrder = e.target.getAttribute('data-value');
        this.setState({order : newOrder});
    }

    render() {
        const orderBy = this.state.orderBy;
        const order = this.state.order;
        let sorted = this.state.data;

        // sorted = _.orderBy(sorted, (item) => {
        //     console.log(item[orderBy]);
        //     return item[orderBy]
        // }, order);

        const items = sorted.map((item)=>{
            return <List data={ item } key={ item.id } orderBy={ this.state.orderBy } />
        });
        return (
          <div className="container">
              <div className="row">
                  <div className="col-sm-8 col-sm-offset-2">
                      <div className="clearfix">
                          <Dropdawn toggle={ this.toggle }
                                    dropdownActive={ this.state.dropdownActive }
                                    doOrderBy={ this.doOrderBy }
                                    doOrder={ this.doOrder }
                                    orderBy={ this.state.orderBy }
                                    order={ this.state.order } />
                      </div>
                      { items }
                  </div>
              </div>
          </div>
        );
    }
}

export default Sort;