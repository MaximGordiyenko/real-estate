import React from 'react';

const Comment = ({text, author}) => {
    return (
      <div className="comment">
          <h2 className="author">{author}</h2>
          {text}
      </div>
    );
};

export default Comment;