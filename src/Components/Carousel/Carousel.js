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
        console.log('item', item);
        console.log('this.state.pos', this.state.index);
        return (
          <div className={style.carousel}>
              <button onClick={() => this.prevProperty()}
                      disabled={this.state.index === 0}
              >Prev
              </button>

              <button onClick={() => this.nextProperty()}
                      disabled={this.state.index === this.state.data.length - 1}
              >Next
              </button>

              <div className={style.col}>
                  <div className={`cards-slider active-slide-${this.state.index}`}>
                      <div className="cards-slider-wrapper" style={{
                          'transform': `translateX( - ${this.state.index * (100 / this.state.data.length)} % )`
                      }}>
                          {item.map(property =>
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