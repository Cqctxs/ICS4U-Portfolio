import React from 'react'
import {styles} from "../styles.js";

const OOP = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div className={`${styles.paddingX} max-w-5xl mx-auto flex flex-row items-start gap-5`}>
                <div>
                    <p className={`${styles.sectionHeadText} whitespace-nowrap`}>Object Oriented Programming</p>
                    <p className={`${styles.sectionText}`}>
                        Object oriented programming, also known as OOP is a programming structure coined by Alan Kay in
                        1966. Object oriented programming relies on the concept of classes and objects, which are used
                        to structure the program into simple reusable pieces of code. There are many object oriented
                        programming languages, including C++, Java, Javascript and Python.
                    </p>
                    <p className={`${styles.sectionSubHeadText}`}>Classes</p>
                    <p className={`${styles.sectionText}`}>
                        A class is a "blueprint" that is used to create objects. Classes often represent broad
                        categories, such as a `Cat` class. Classes have attributes, which are properties that classes
                        can have.
                    </p>
                    <p className={`${styles.sectionSubHeadText}`}>Instances</p>
                    <p className={`${styles.sectionText}`}>
                        An instance is created by a class. All instances of a class have similar properties, which are
                        described in the class. Different instances can have different values in their attributes.
                    </p>
                    <p className={`${styles.sectionSubHeadText}`}>Inheritance</p>
                </div>
            </div>
        </section>
    )
}

export default OOP