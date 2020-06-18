import React from 'react';
import {Link, Route} from "react-router-dom";
import style from '../../css/Breadcrumbs.module.css';

const Breadcrumbs = () => (
      <ul className={style.container}>
          <Route path='/:path' component={BreadcrumbsItem} />
      </ul>
);

const BreadcrumbsItem = ({match}) => (
  <span className={style.breadcrumbsItem}>
        <div className={match.isExact ? `${style.breadcrumbActive}` : undefined}>
            <Link to={match.url || ''}>
                {match.url}
            </Link>
        </div>
        <Route path={`${match.url}/:path`} component={BreadcrumbsItem} />
  </span>
);

export default Breadcrumbs;