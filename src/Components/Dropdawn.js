import React from 'react';

const Dropdawn = ({dropdownActive, toggle, orderBy, order, doOrderBy, doOrder}) => {
    const names = [["first_name", "first name"],["last_name", "last name"],["company","company"],["job","job"],["city","city"],["gender","gender"]];
    const checked = <span className="glyphicon glyphicon-ok"></span>;
    const input = names; // array from the bottom of this script
    const output = names.map((item) => {
        return <li><a href="#" onClick={doOrderBy}
                      data-value={item[0]}>{item[1]} {orderBy === item[0] ? checked : null}</a></li>
    });
    return (
      <div className={dropdownActive ? "dropdown  pull-right open" : "dropdown pull-right "}>
          <a className="btn btn-info" onClick={toggle} href="#">
              Sort items by
              <span className="caret"> </span>
          </a>
          <ul className="dropdown-menu">
              {output}
              <li className="divider"> </li>
              <li><a href="#" onClick={doOrder} data-value="asc">ascendind {order === "asc" ? checked : null}</a></li>
              <li><a href="#" onClick={doOrder} data-value="desc">descending {order === "desc" ? checked : null}</a>
              </li>
          </ul>
      </div>
    );
};

export default Dropdawn;