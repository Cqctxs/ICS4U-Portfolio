import React from 'react'
import {styles} from "../styles.js";
import Heading from "./Heading.jsx";
import Code from "./Code.jsx";

const Recursion = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div className={`${styles.paddingX} max-w-5xl mx-auto flex flex-row items-start gap-5 pb-32`}>
                <div>
                    <p className={`${styles.sectionHeadText}`}>Recursion</p>
                    <p className={`${styles.sectionText}`}>Recursion is the technique of making a function call itself.
                        Using this technique provides a way to break down a complicated problem into smaller, simpler
                        problems which are easy to solve. All Recursive algorithms have to follow three important rules:
                    </p>
                    <br/>
                    <ol className={`${styles.sectionText} list-decimal ${styles.paddingX}`}>
                        <li className={'mt-4'}>A recursive algorithm must have a <span
                            className={`${styles.sectionBold}`}>base case</span>.
                        </li>
                        <li className={'mt-4'}>A recursive algorithm must change its state and move toward the base
                            case.
                        </li>
                        <li className={'mt-4'}>A recursive algorithm must call itself, recursively.</li>
                    </ol>
                    <p className={`${styles.sectionText}`}>A base case refers to a condition or scenario that allows an
                        algorithm or recursive function to terminate or exit. It serves as the stopping criterion that
                        prevents the algorithm from running indefinitely. If the recursive algorithm never changed its
                        state, or never moved towards the base case, then the algorithm will never stop. The last rule
                        is pretty self explanatory, but also essential.</p>
                    <Heading text={`Uses of Recursion`}/>
                    <p className={`${styles.sectionText}`}>
                        Recursion might seem useless at first, but it is a powerful concept in programming that offers
                        several practical applications. For example, in the Search and Sort section: binary search,
                        merge sort and quick sort all have recursive implementations. While it is possible to have
                        non-recursive implementations of these algorithms, recursive methods are often simpler to code
                        and easier to read.</p>
                    <p className={`${styles.sectionText}`}>Here is an example of a recursive algorithm:</p>
                    <Code text={`
public static int factorial(int n) {
    //Base case: factorial of 0 or 1 is 1
    if (n == 0 || n == 1) {
        return 1;
    }

    //Recursive call: n! = n * (n-1)!
    return n * factorial(n - 1);
}
                    `}/>
                    <p className={`${styles.sectionText}`}>In this example, the <span
                        className={`${styles.sectionBold}`}>factorial()</span> method takes a non-negative integer n as
                        an input and returns its factorial. The base case is when n is equal to 0 or 1, where the method
                        immediately returns 1. For any other value of n, the method makes a recursive call to calculate
                        (n-1)! and multiplies it by n to obtain n!. This method follows all three rules of recursion: It
                        has a base case, it moves towards the base case and calls itself recursively.</p>
                    <Heading text={`Common Mistakes`}/>
                    <ul className={`${styles.sectionText} list-disc ${styles.paddingX}`}>
                        <li className={'mt-4'}>
                            Forgetting to define a base case or having an incorrect base case can result in infinite
                            recursion or incorrect results. Make sure to identify the simplest possible case that can be
                            solved directly and provide the necessary termination condition.
                        </li>
                        <li className={'mt-4'}>
                            Recursive calls should be made with appropriate parameters to ensure progress towards the
                            base case. Incorrectly defined or missing parameters can lead to infinite recursion or
                            incorrect results.
                        </li>
                        <li className={'mt-4'}>
                            Some inputs or scenarios may require special handling to ensure correct behavior. Failing to
                            handle edge cases, such as negative values or zero, can lead to unexpected results or
                            errors.
                        </li>
                        <li className={'mt-4'}>
                            Recursion relies on the program stack to keep track of function calls. If the recursion
                            depth becomes too large, it can exceed the stack's capacity, resulting in a stack overflow
                            error. Be mindful of the recursion depth and the limitations of the program stack.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Recursion