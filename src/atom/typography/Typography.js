import React from 'react';
import './typography.css';

function Typography(props) {
  return (
    <div className={props.type}>{props.children}</div>
  )
}

export default Typography;