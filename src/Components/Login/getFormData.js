import React, {Component} from 'react';
import axios from 'axios';

class GetFormData extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        allData: [],
    };

    componentDidMount() {
        axios.get("http://localhost:4000/getData")
            .then(res => {
                this.setState({
                    allData: res.data,
                })
            })
            .catch(err => {
                console.log("this is error", err)
            })
    }

    render() {
        return (
            <div>
                <div> {this.state.allData.map(e => {
                    return (
                        <ul key={e._id}>
                            <li>{e.username}</li>
                            <li>{e.email}</li>
                            <li>{e.password}</li>
                        </ul>
                    )
                })}
                </div>
            </div>
        );
    }
}
export default GetFormData;