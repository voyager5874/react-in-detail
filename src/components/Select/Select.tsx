import React, {useEffect, useRef, useState} from 'react';
import {SelectItemType} from "../../App";
import {RiArrowDownSLine} from "react-icons/all";
import styles from "./Select.module.css"

type SelectPropsType = {
    items: Array<SelectItemType>
    callback: (item: SelectItemType) => void
    value: number
}


export const Select = (props: SelectPropsType) => {

    let currentItem = props.items.find(item => item.value === props.value)

    const [collapsed, setCollapsed] = useState<boolean>(true)
    const selectItemsRef = useRef(null)

    const selectClickHandler = () => {
        setCollapsed(false)

        // selectItemsRef.focus()

    }
    // useEffect(() => {
    //     if (!collapsed) {
    //         // @ts-ignore
    //         selectItemsRef.current.focus();
    //     }
    // }, [selectItemsRef]);

    const itemClickHandler = (itemValue: number) => {
        let desiredItem = props.items.find(item => item.value === itemValue)
        if (desiredItem) props.callback(desiredItem)
        setCollapsed(true)
    }
    const selectLostFocusHandler = () => {
        setCollapsed(true)
    }


    return (
        <div className={styles.diySelectWrapper}>

            {/*{collapsed && <div className={`${!collapsed ? styles.hidden : ""} ${styles.collapsedSelectBox}`}*/}
            {/*{<div className={`${!collapsed ? styles.hidden : ""} ${styles.collapsedSelectBox}`}*/}
            {<div className={`${styles.collapsedSelectBox}`}
                  onClick={selectClickHandler}>
                <h3>
                    {currentItem && currentItem.title}
                    {/*что-то выбрано? тогда рисуем название выбранного*/}
                </h3>
                <div className={styles.arrowIcon}><RiArrowDownSLine/></div>

            </div>}
            {/*tabIndex={0}*/}
            <div id="selectItems" ref={selectItemsRef} tabIndex={0} onBlur={selectLostFocusHandler}
                 className={`${styles.diySelectItems} ${collapsed ? styles.hidden : ""}`}>
                {props.items.map((item, index) =>
                    <div className={styles.diySelectLine}
                        // onBlur={selectLostFocusHandler}
                         key={index}
                         onClick={() => itemClickHandler(item.value)}>
                        {item.title}
                    </div>)}
            </div>

        </div>
    );
};

