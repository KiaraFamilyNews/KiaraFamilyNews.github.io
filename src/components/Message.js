import React from 'react';
import "../styles/messaage.css"

const messageWithClick = { cursor: 'pointer' };

const Message = ({ index, onClick, photo, margin, direction, top, left, key, message, author }) => {
    const messageStyle = { width: photo.width, height : photo.height, margin: margin,  };
    if (direction === 'column') {
        messageStyle.position = 'absolute';
        messageStyle.left = left;
        messageStyle.top = top;
    }
  
    const handleClick = event => {
      onClick(event, { photo, index });
    };
    // console.log(photo)
    return (
      <div
        key={key}
        className="message-card"
        style={onClick ? { ...messageStyle, ...messageWithClick } : messageStyle}
        {...photo}
        onClick={onClick ? handleClick : null}
      >
        <div className="message-card-content">
          <p className="message-card-message">"{message}"</p>
          <p className="message-card-author">{author}</p>
        </div>
      </div>
    );
  };

  export default Message;