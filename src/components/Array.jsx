import React from 'react'
import {styles} from "../styles.js";

const Array = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div className={`${styles.paddingX} max-w-5xl mx-auto flex flex-row items-start gap-5`}>
                <div>
                    <p className={`${styles.sectionHeadText}`}>Arrays and ArrayLists</p>
                    <p className={`${styles.sectionText}`}>Arrays and ArrayLists are data structures that store
                        collections of similar data elements, which can all be accessed with the same name. Instead of
                        defining many variables to store a large amount of data, this can be all replaced with an
                        array.</p>
                    <p className={`${styles.sectionSubHeadText}`}>Arrays</p>
                    <p className={`${styles.sectionText}`}>In Java, arrays are a collection of data that holds a <span
                        className={`${styles.sectionBold}`}>fixed number</span> of values. The length of the array is
                        established during creation, and cannot be changed again. Arrays can only store data of only one
                        datatype, however that datatype may be chosen.</p>
                    <p className={`${styles.sectionSubHeadText}`}>Multidimensional Arrays</p>
                    <p className={`${styles.sectionText}`}>A multidimensional array is an <span
                        className={`${styles.sectionBold}`}>array of arrays</span>. They are useful when you want to
                        store data complex data, such as a table with rows and columns. Arrays are not just limited to
                        two dimensions, they can be nested as many times as you want.</p>
                    <p className={`${styles.sectionSubHeadText}`}>ArrayLists</p>
                    <p className={`${styles.sectionText}`}>An ArrayList is similar to an array, except that it has
                        a <span className={`${styles.sectionBold}`}>dynamic length</span>. This means that extra
                        elements can be added later on, and elements can also be removed. ArrayLists also have methods,
                        which can help make coding easier.</p>
                </div>
            </div>
        </section>
    )
}

export default Array