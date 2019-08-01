import React from 'react';

const List = ({data, orderBy}) => {
    // const { data, orderBy } = this.props;
    console.log('data', data, 'orderBy', orderBy);
    const categories = ["company","job","city","gender"]
    const input = categories; // array from the bottom of this script
    const output = input.map((item)=>{
        return <div><small className={ orderBy === item ? "active" : null }>{item}:</small> {data[item] }</div>
    });
    return (
      <div className="media">
          <div className="media-left">
              <img className="media-object" src={ data.img } alt={`${data.first_name} ${data.last_name}` } />
          </div>
          <div className="media-body">
              <h4 className="media-heading">
                  <span className={ orderBy === "first_name" ? "active" : null }>{ data.first_name } </span>
                  <span className={ orderBy === "last_name" ? "active" : null }>{ data.last_name }</span>
              </h4>
              <div><small>about:</small> { data.about }</div>
              {output}
              <div><small>email:</small> <a href={ data.email }> { data.email } </a></div>
          </div>
      </div>
    );
};

export default List;