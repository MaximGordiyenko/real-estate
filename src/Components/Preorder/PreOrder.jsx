import React, {Component} from 'react';
import style from './PreOrder.module.css';

class PreOrder extends Component {
    state = {
        fullname: "",
        email: "",
        phone: "",
    };

    onChangefullname = (e) => {
        this.setState({
            fullname: e.target.value,
        })
    };

    onChangeMail = (e) => {
        this.setState({
            email: e.target.value,
        })
    };

    onChangePhone = (e) => {
        this.setState({
            phone: e.target.value,
        })
    };

    render() {
        const {fullname, email, phone} = this.state;
        return (
          <>
              <div>
                  <h4>Online Pre-Order</h4>
                  <div className={style.wrapper}>
                      <form action="#"
                            method="POST"
                            onSubmit={this.onSubmit}
                      >
                          <div className="form-group">
                              <label>Your full name:</label>
                              <input className="form-control"
                                     aria-describedby="emailHelp"
                                     placeholder="Enter first name and last name"
                                     type="text"
                                     name="username"
                                // id="username"
                                     value={fullname}
                                     onChange={this.onChangefullname}
                              />
                          </div>

                          <div className="form-group">
                              <label>Email:</label>
                              <input className="form-control"
                                     placeholder="Enter your email address"
                                     type="text"
                                     name="email"
                                // id="email"
                                     value={email}
                                     onChange={this.onChangeMail}
                              />
                              <small id="emailHelp" className="form-text text-muted">
                                  We'll never share your email with anyone else.</small>
                          </div>

                          <div className="form-group">
                              <label>Phone:</label>
                              <input className="form-control"
                                     placeholder="Enter your phone number"
                                     type="number"
                                     name="phone"
                                // id="password"
                                     size="15"
                                     value={phone}
                                     onChange={this.onChangePhone}
                              />
                          </div>
                          <button type="submit"
                                  disabled={!this.state.fullname && !this.state.email && !this.state.phone}
                                  className="btn btn-primary">
                              Post
                          </button>
                      </form>
                  </div>
              </div>
          </>
        );
    }
}

export default PreOrder;