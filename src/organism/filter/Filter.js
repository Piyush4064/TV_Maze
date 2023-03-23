import React from "react";

import  Dropdown  from "../../atom/dropdown";
import Icon from "../../atom/icon";
import Modal from "../../molecules/modal";
import Radio from "../../molecules/radio";
import { useWindowDimension } from "../../util";

import styles from "./filter.module.css";

function FilterWindow(props) {
    const onChange = (event) => {
        console.log(event.target);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    };

    return (
        <form className={styles.filterContainer} onSubmit={onSubmit}>
            {props.data.map((data) => (
                <div key={data.dataKey} className={styles.filter}>
                    <div className={styles.filterTitle}>{data.title}</div>
                    {data.options.length <= 10 ? (
                        <Radio
                            name={data.dataKey}
                            options={data.options}
                            onChange={onChange}
                        />
                    ) : (
                        <Dropdown options={data.options} onChange={onChange} />
                    )}
                </div>
            ))}

            <button type="submit" className={styles.filterbtn}>
                Filter
            </button>
        </form>
    );
}

function Filter(props) {
    const [isOpen, setIsOpen] = React.useState(true);
    const windowDimension = useWindowDimension();

    return (
        <>
            {windowDimension.width <= 10 ? (
                <div>
                    <Icon className="fa-solid fa-filter" />
                    <Modal isOpen={isOpen}>{FilterWindow(props)}</Modal>
                </div>
            ) : (
                FilterWindow(props)
            )}
        </>
    );
}

export default React.memo(Filter);
