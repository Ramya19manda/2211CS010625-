import React from "react";
const MyComponentWithoutJSX = () => {
    return React.createElement('div',null,[
        React.createElement('Hello',null,'RAMYA'),
        React.createElement('p',null,'I AM FROM MRUH.'),
    ]);
}
export default MyComponentWithoutJSX;