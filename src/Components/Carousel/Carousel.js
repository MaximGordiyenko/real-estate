import React, {Component} from 'react';
import data from '../../api/movies';
import style from "../../css/Carousel.module.css";
import CarouselItem from "./CarouselItem";

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data, //[0:{}, 1:{}, 2:{}]
            index: 0,
        };
    }

    prevProperty = () => {
        this.setState({
            index: (this.state.index - 1) % this.state.data.length
        });
    };

    nextProperty = () => {
        this.setState({
            index: (this.state.index + 1) % this.state.data.length
        });
    };

    render() {
        const item = this.state.data[this.state.index];
        let keys = [];
        keys.push(item);

        return (
          <div className={style.carousel}>
              <button className={style.prevBnt}
                      onClick={() => this.prevProperty()}
                      disabled={this.state.index === 0}
              >Prev
              </button>

              <button className={style.nextBtn}
                      onClick={() => this.nextProperty()}
                      disabled={this.state.index === this.state.data.length - 1}
              >Next
              </button>

              <div className={style.col}>
                  <div className={`style.cardsSlider style.activeSlide-${this.state.index}`}>
                      <div className={style.cardsSliderWrapper} style={{
                          'transform': `translateX( - ${this.state.index * (100 / this.state.data.length)}%)`
                      }}>
                          {keys.map(property =>
                            <CarouselItem key={property.id}
                                          property={property}
                            />
                          )}
                      </div>
                  </div>
              </div>

          </div>
        );
    }
}

export default Carousel;