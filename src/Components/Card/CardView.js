import React from 'react';
import style from "../../css/Card.module.css";

const CardView = (props) => {
    console.log(props);
    return (
      <div>
          <h1>Hello {props.match.params.id}!</h1>
      </div>
    )
};

export default CardView;