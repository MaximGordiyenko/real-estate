import React from 'react';
import {Link} from 'react-router-dom';

const Dropdawn = ({dropdownActive, toggle, orderBy, order, doOrderBy, doOrder}) => {
    const names = [["id", "id"], ["title", "title"], ["price", "price"], ["bedrooms", "bedrooms"], ["city", "city"], ["address", "address"]];
    const checked = <span className="glyphicon glyphicon-ok"> </span>;

    const output = names.map((item) => {
        console.log('item from names', item);
        return <li key={item.id}>
            <Link to={''}
               onClick={doOrderBy}
               data-value={item[0]}
            >{item[1]} {orderBy === item[0] ? checked : null}
            </Link>
        </li>
    });
    return (
      <div className={`${dropdownActive ? "dropdown pull-right open" : "dropdown pull-right"}`}>
          <Link to={''}
                className="btn btn-info"
                onClick={toggle}>
              Sort items by
              <span className="caret"> </span>
          </Link>
          <ul className="dropdown-menu">
              {output}
              <li className="divider"> </li>
              <li>
                  <Link to={''}
                        onClick={doOrder}
                        data-value="asc">ascendind {order === "asc" ? checked : null}
                  </Link>
              </li>
              <li>
                  <Link to={''}
                        onClick={doOrder}
                        data-value="desc">descending {order === "desc" ? checked : null}
                  </Link>
              </li>
          </ul>
      </div>
    );
};

export default Dropdawn;