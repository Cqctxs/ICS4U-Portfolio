import React from 'react'
import {styles} from "../styles.js";

const Code = (props) => {
    return (
        <p className={`${styles.code}`}>{props.text}</p>
    )
}

export default Code