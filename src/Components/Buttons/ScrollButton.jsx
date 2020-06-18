import React, {Component} from 'react';
import style from '../../css/ScrollButton.module.css';

class ScrollButton extends Component {
    state = {
        intervalId: 0
    };

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({
            intervalId: intervalId
        });
    }

    render() {
        return (
          <div>
              <button title='Back to top' className={style.scroll}
                      onClick={() => {
                          this.scrollToTop();
                      }}>
                  <span className={style.arrowUp}>&#x2303;</span>
              </button>
          </div>
        );
    }
}

export default ScrollButton;