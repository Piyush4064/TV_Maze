import React from 'react';

import styles from './radio.module.css';

function Radio(props) {
  return (
    <div className={styles.radio}>
      {props.options?.map((option) => 
          <div className={styles.radioContainer}>
            <input 
            type="radio" 
            name={props.name}
            />
            <label>{option}</label>
          </div>
      )}
        
    </div>
  )
}

export default React.memo(Radio);