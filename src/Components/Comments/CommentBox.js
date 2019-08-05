import React, {Component} from 'react';
import CommentList from "./CommentList";

class CommentBox extends Component {
    state = {
        data: [
            {
                "author": "Shawn Spencer",
                "text": "I've heard it both ways"
            },
            {
                "author": "Burton Guster",
                "text": "You hear about Pluto? That's messed up"
            }
        ]
    };

    componentDidMount() {
        const getData = JSON.parse(localStorage.getItem("data"));
        this.setState({
            data: getData
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {data} = this.state;
        const authorVal = e.target[0].value.trim();
        console.log(authorVal);
        const textVal = e.target[1].value.trim();
        console.log(textVal);
        if (!textVal || !authorVal) {
            return;
        }

        const comments = {author: authorVal, text: textVal};
        console.log(comments);
        const newComments = data.concat([comments]);
        console.log(newComments);
        this.setState({
            data: newComments
        });

        if (typeof (Storage) !== "undefined") {
            localStorage.setItem("data", JSON.stringify(data));
        } else {
            alert("Sorry, your browser does not support Web Storage...");
        }
        e.target[0].value = '';
        e.target[1].value = '';
    };

    render() {
        console.log(this.state.data);
        return (
          <section className="comment-box">
              <header className="pt-4 pb-2 pl-2">
                  <h3>Comments</h3>
              </header>
              <section>
                  <form className="comment-form form-group" onSubmit={this.handleSubmit}>
                      <div className="input-group">
                          <span className="input-group-addon">Name</span>
                          <input type="text" placeholder="Your name" className="form-control"/>
                      </div>
                      <div className="input-group">
                          <span className="input-group-addon">Comment</span>
                          <input type="text" placeholder="Say something..." className="form-control"/>
                      </div>
                      <input type="submit" value="Post" className="btn btn-primary"/>
                  </form>
              </section>
              <article>
                  <CommentList data={this.state.data}/>
              </article>
          </section>
        );
    }
}

export default CommentBox;