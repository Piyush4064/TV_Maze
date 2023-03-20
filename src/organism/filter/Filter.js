import React from 'react';
import {Dropdown} from '../../atom';
import Radio from '../../molecules/radio';
import styles from './filter.module.css';



function Filter(props) {

    const onChange = (event) => {
        console.log(event.target);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    }

  return (
    <form className={styles.filterContainer} onSubmit={onSubmit}>
        
        {props.data.map(data =>
        <div key={data.dataKey}  className={styles.filter}>
            <div className={styles.filterTitle}>{data.title}</div>
            { data.options.length <=10 ? 
                <Radio  
                name={data.dataKey}
                options={data.options} 
                onChange={onChange}/> 
                : 
                <Dropdown 
                options={data.options} 
                onChange={onChange}/>
            }
        </div>
        )}
        
        <button type="submit" className={styles.filterbtn}>Filter</button>
    </form>
  )
}

export default Filter