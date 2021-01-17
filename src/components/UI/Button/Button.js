import React from 'react';

const Button = (props) => <button onClick={props.clicked}>{props.children}</button>;

export default Button;
