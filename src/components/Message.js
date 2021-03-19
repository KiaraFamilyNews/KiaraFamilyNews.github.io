import React from 'react';

const messageWithClick = { cursor: 'pointer' };

const Message = ({ index, onClick, photo, margin, direction, top, left, key, message }) => {
    const messageStyle = { width: photo.width, height : photo.height, margin: margin, display: 'block', background: 'none no-repeat scroll 0 0 #555',  };
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
        style={onClick ? { ...messageStyle, ...messageWithClick } : messageStyle}
        {...photo}
        onClick={onClick ? handleClick : null}
      ><h3>TEST</h3><p>{message}</p></div>
    );
  };

  export default Message;