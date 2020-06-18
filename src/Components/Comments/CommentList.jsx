import React from 'react';
import Comment from "./Comment";

const CommentList = ({data}) => {
    // console.log("comment list", data);
    return (
      <div className="comment-list">
          {data.map((c, index) => {
              return (
                <Comment author={c.author}
                         text={c.text}
                         key={index}
                />
              );
          })}
      </div>
    );
};

export default CommentList;