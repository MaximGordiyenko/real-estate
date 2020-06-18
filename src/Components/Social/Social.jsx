import React from "react";
import {Link} from 'react-router-dom';
import style from '../../css/Social.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";

function Social() {
    return (
      <div className={style.wrapper}>
          <div className={style.socialContainer}>
              <Link to={''}
                    href="https://www.youtube.com/c/jamesqquick"
                    className={style.youtube}
              >
                  <FontAwesomeIcon icon={faYoutube} size="2x"/>
              </Link>
              <Link to={''}
                    href="https://www.facebook.com/learnbuildteach/"
                    className={style.facebook}
              >
                  <FontAwesomeIcon icon={faFacebook} size="2x"/>
              </Link>
              <Link to={''}
                    href="https://www.twitter.com/jamesqquick"
                    className={style.twitter}>
                  <FontAwesomeIcon icon={faTwitter} size="2x"/>
              </Link>
              <Link to={''}
                    href="https://www.instagram.com/learnbuildteach"
                    className={style.instagram}
              >
                  <FontAwesomeIcon icon={faInstagram} size="2x"/>
              </Link>

          </div>
          <div className={style.policy}>
              <span className={style.span}>© 2018 Labs Corporation</span>
              <span className={style.span}>Terms of Service</span>
              <span className={style.span}>Privacy Policy</span>
          </div>
      </div>
    );
}

export default Social;