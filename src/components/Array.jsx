import React from 'react'
import {styles} from "../styles.js";
import Heading from "./Heading.jsx";
import Code from "./Code.jsx";

const Array = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div className={`${styles.paddingX} max-w-5xl mx-auto flex flex-row items-start gap-5 pb-32`}>
                <div>
                    <p className={`${styles.sectionHeadText}`}>Arrays and ArrayLists</p>
                    <p className={`${styles.sectionText}`}>Arrays and ArrayLists are data structures that store
                        collections of similar data elements, which can all be accessed with the same name. Instead of
                        defining many variables to store a large amount of data, this can be all replaced with an
                        array.</p>
                    <Heading text={`Arrays`}/>
                    <p className={`${styles.sectionText}`}>In Java, arrays are a collection of data that holds a <span
                        className={`${styles.sectionBold}`}>fixed number</span> of values. The length of the array is
                        established during creation, and cannot be changed again. Arrays can only store data of only one
                        datatype, however that datatype may be chosen.</p>
                    <p className={`${styles.sectionText}`}>The elements of the array can be accessed based on their
                        index. The index numbering is different from counting, with the first position starting at 0.
                        The first element is at index 0, the second element is at index 1 ... and the last element is at
                        index n-1, where n is the index of the array.</p>
                    <Heading text={`How to Use Arrays`}/>
                    <p className={`${styles.sectionText}`}>Arrays can be declared in Java with the datatype and the
                        square brackets []. An array can be initialized with the keyword <span
                            className={`${styles.sectionBold}`}>new</span>, followed by the datatype and the length
                        inside of the square brackets. Arrays can also be initialized with values, which is done by
                        wrapping the values with curly brackets {}.</p>
                    <Code text={`
int[] numbers; //Declaration of an integer array
numbers = new int[5] //Initialization of an the array with a length of 5
//When initialized, values will be the default value
//int = 0, double = 0.0, boolean = false, Objects = null

//Arrays can also be initialized with values
int[] nums = {1, 2, 3, 4, 5}; //Declaration and initialization of an array with values
                    `}/>
                    <p className={`${styles.sectionText}`}>Specific elements can be accessed, as well as updated using
                        the square brackets, with the index number inside. Trying to access an element with a negative
                        index value, or a value larger than the length-1, will lead to <span
                            className={`${styles.sectionBold}`}>ArrayIndexOutOfBoundsException</span>.</p>
                    <Code text={`
//Index values start from 0 and goes up until n-1 (4)
int firstNum = numbers[0];
int lastNum = numbers[4];

//Arrays can be modified by assigning new values to individual elements 
nums[5] = 10; //Changes the last element of nums to 10
                    `}/>
                    <p className={`${styles.sectionText}`}>Arrays can also be iterated through using a for loop. The
                        current index value is kept track of with a variable, which can be updated in a loop. The
                        maximum value the index variable can be is <span
                            className={`${styles.sectionBold}`}>length-1</span>, which can be accessed using the <span
                            className={`${styles.sectionBold}`}>length</span> property.</p>
                    <Code text={`
//The length of the array can be accessed using the length property
int length = numbers.length;

//Arrays can be looped through using a for loop
for (int i = 0; i < nums.length; i++) {
    //Printing each element of the array
    System.out.println(nums[i]);
}
                    `}/>
                    <Heading text={`Multidimensional Arrays`}/>
                    <p className={`${styles.sectionText}`}>A multidimensional array is an <span
                        className={`${styles.sectionBold}`}>array of arrays</span>. They are useful when you want to
                        store data complex data, such as a table with rows and columns. Arrays are not just limited to
                        two dimensions, they can be nested as many times as you want.</p>
                    <p className={`${styles.sectionText}`}>Similarly to arrays, multidimensional arrays can be
                        initialized using the square brackets and length, or with values already in place. When
                        initializing a new empty array, the length of each dimension needs to be specified.</p>
                    <Code text={`
//Declaration and initialization of a 3x3 2D array
int[][] matrix = new int[3][3];

//Initialization of a 3x3 2D array with values
int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
                    `}/>
                    <p className={`${styles.sectionText}`}>Elements in multidimensional arrays are accessed using
                        multiple index values, one for each dimension. Indices start from 0 and go up to the length-1 of
                        the corresponding dimension.</p>
                    <Code text={`
//Index values start from 0 and go up until n-1 (2) for the outer array
//Index values start from 0 and go up until n-1 (2) for the inner array
int value = matrix[1][2]; // Accessing an element at row 1, column 2
                    `}/>
                    <p className={`${styles.sectionText}`}>Nested loops are commonly used to iterate through
                        multidimensional arrays. Each loop corresponds to a dimension, allowing access to each event. A
                        multidimensional array has a length property for each dimension. The specific length of each
                        dimension can be accessed with the corresponding index.</p>
                    <Code text={`
int rows = matrix.length; // Length of the first dimension (number of rows)
int columns = matrix[0].length; // Length of the second dimension (number of columns)

//Iterating through a multidimensional array using nested loops
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < columns; j++) {
        //Printing each element of the 2D array
        System.out.println(matrix[i][j]); 
    }
}
                    `}/>
                    <Heading text={`ArrayLists`}/>
                    <p className={`${styles.sectionText}`}>An ArrayList is a class provided by the Java Collections
                        Framework that implements the List interface. It is a dynamic, resizable array-like data
                        structure that allows you to store and manipulate elements of any type.</p>
                    <p className={`${styles.sectionText}`}>When using the ArrayLists in Java, it is important to import the ArrayList class from the <span>java.util</span> package.</p>
                </div>
            </div>
        </section>
    )
}

export default Array