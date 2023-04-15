import React from 'react'
import {styles} from "../styles.js";

const Recursion = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div className={`${styles.paddingX} max-w-5xl mx-auto flex flex-row items-start gap-5`}>
                <div>
                    <p className={`${styles.sectionHeadText}`}>Recursion</p>
                    <p className={`${styles.sectionText}`}>Recursion is the technique of making a function call itself.
                        Using this technique provides a way to break down a complicated problem into smaller, simpler
                        problems which are easy to solve. All Recursive algorithms have to follow three important rules:
                    </p>
                    <br/>
                    <ol className={`${styles.sectionText} list-decimal`}>
                        <li className={'mt-4'}>A recursive algorithm must have a <span
                            className={`${styles.sectionBold}`}>base case</span>.
                        </li>
                        <li className={'mt-4'}>A recursive algorithm must change its state and move toward the base
                            case.
                        </li>
                        <li className={'mt-4'}>A recursive algorithm must call itself, recursively.</li>
                    </ol>
                    <br/>
                    <p className={`${styles.sectionText}`}>Let's think about what happens when we don't follow these
                        rules. For the first rule, if there is no base case, the algorithm will never have a way of
                        stopping itself. This means that the algorithm will never stop and eventually run out of memory.
                        For the second rule, if we never move towards, or are always moving away from the base case, the
                        algorithm will once again get stuck and run out of memory. The third rule is pretty
                        self-explanatory. If the recursive algorithm doesn't call itself recursively, then the algorithm
                        is not recursive.</p>
                </div>
            </div>
        </section>
    )
}

export default Recursion