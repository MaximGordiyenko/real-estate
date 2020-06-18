import React, {Component} from 'react'
import style from '../../css/Login.module.css'
import axios from "axios";
import GetFormData from "./getFormData";

const isLogged = false;

const INITIAL_STATE = {
    username: "",
    email: "",
    password: "",
};

export class LoginForm extends Component {
    state = {...INITIAL_STATE};


    onChangeName = (e) => {
        this.setState({
            username: e.target.value,
        })
    };

    onChangeMail = (e) => {
        this.setState({
            email: e.target.value,
        })
    };

    onChangePass = (e) => {
        this.setState({
            password: e.target.value,
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(`name: ${this.state.username}, email: ${this.state.email}, password: ${this.state.password}`);
        //axios send results from form to server
        axios.post('http://localhost:4000/register', {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        })
        //form result save in state
            .then(() => {
                this.setState({
                    username: "",
                    email: "",
                    password: "",
                })
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        const {username, email, password} = this.state;
        return (
            <>
                <section className={style.wrapper}>
                    <form action="/register"
                          method="POST"
                          className={style.form}
                          onSubmit={this.onSubmit}
                    >
                        <label>Ваше имя:</label>
                        <input type="text"
                               placeholder="Enter Username"
                               name="username"
                            // id="username"
                               value={username}
                               onChange={this.onChangeName}
                        />

                        <label>Email:</label>
                        <input type="text"
                               placeholder="Enter Email"
                               name="email"
                            // id="email"
                               value={email}
                               onChange={this.onChangeMail}
                        />

                        <label>Password:</label>
                        <input type="password"
                               placeholder="Enter Password"
                               name="password"
                            // id="password"
                               size="15"
                               value={password}
                               onChange={this.onChangePass}
                        />

                        {!isLogged ?
                            <button type="submit">Log In</button>
                            :
                            <button type="submit">Log Out</button>
                        }
                    </form>
                </section>
                <GetFormData/>
            </>
        );
    }
}