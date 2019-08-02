import React from 'react';
import {Link} from 'react-router-dom';
import services from '../../api/investors';
import occupiers from '../../api/occupiers';
import specialties from '../../api/specialties';
import sectors from '../../api/sectors';
import style from '../../css/Services.module.css';

const Services = () => (
  <section className={style.container}>

      <section className={style.item}>
          <header className={style.header}>
              <span className={style.iconInvestor}> </span>
              <h1>Services for Investors</h1>
          </header>
          <article>
              <ul className={style.unsortedList}>
                  {services.map((service, index) =>
                    <li className={style.list}
                        key={index}>
                        <Link className={style.link}
                              to={''}>
                            {service}
                        </Link>
                    </li>
                  )}
              </ul>
          </article>
      </section>

      <section className={style.item}>
          <header className={style.header}>
              <span className={style.iconOccupies}> </span>
              <h1>Services for Occupiers</h1>
          </header>
          <article>
              <ul className={style.unsortedList}>
                  {occupiers.map((service, index) =>
                    <li className={style.list}
                        key={index}>
                        <Link className={style.link}
                              to={''}>
                            {service}
                        </Link>
                    </li>
                  )}
              </ul>
          </article>
      </section>

      <section className={style.item}>
          <header className={style.header}>
              <span className={style.iconSpecialist}> </span>
              <h1>Asset Types & Specialties</h1>
          </header>
          <article>
              <ul className={style.unsortedList}>
                  {specialties.map((service, index) =>
                    <li className={style.list}
                        key={index}>
                        <Link className={style.link}
                              to={''}>
                            {service}
                        </Link>
                    </li>
                  )}
              </ul>
          </article>
      </section>

      <section className={style.item}>
          <header className={style.header}>
              <span className={style.iconIndustry}> </span>
              <h1>Industry Sectors</h1>
          </header>
          <article>
              <ul className={style.unsortedList}>
                  {sectors.map((service, index) =>
                    <li className={style.list}
                        key={index}>
                        <Link className={style.link}
                              to={''}>
                            {service}
                        </Link>
                    </li>
                  )}
              </ul>
          </article>
      </section>
  </section>
);

export default Services;