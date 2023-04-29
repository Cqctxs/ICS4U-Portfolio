import React from 'react'
import {styles} from "../styles.js";

const Heading = (props) => {
    return (
        <p className={`${styles.sectionSubHeadText}`}>{props.text}</p>
    )
}

export default Heading