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
                        square brackets ([]). An array can be initialized with the keyword <span
                            className={`${styles.sectionBold}`}>new</span>, followed by the datatype and the length
                        inside of the square brackets. Arrays can also be initialized with values, which is done by
                        wrapping the values with curly brackets {}.</p>
                    <Code text={`
int[] numbers; //Declaration of an integer array
numbers = new int[5] //Initialization of an the array with a length of 5
//When initialized, values will be the default value
//int = 0, double = 0.0, boolean = false, Objects = null

//Arrays can also be initialized with values
int[] nums = {1, 2, 3, 4, 5};
//Declaration and initialization of an array with values
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
// Length of the first dimension (number of rows)
int rows = matrix.length;
// Length of the second dimension (number of columns)
int columns = matrix[0].length;

//Iterating through a multidimensional array using nested loops
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < columns; j++) {
        //Printing each element of the 2D array
        System.out.println(matrix[i][j]); 
    }
}
                    `}/>
                    <Heading text={`Common Mistakes with Arrays`}/>
                    <ul className={`${styles.sectionText} list-disc ${styles.paddingX}`}>
                        <li className={'mt-4'}>
                            Trying to access an array element using an index that is outside the valid range causes an
                            ArrayIndexOutOfBoundsException.
                        </li>
                        <li className={'mt-4'}>
                            Not initializing arrays before accessing values causes a NullPointerException.
                        </li>
                        <li className={'mt-4'}>
                            Storing an element of an incompatible type in an array causes an ArrayStoreException.
                        </li>
                        <li className={'mt-4'}>
                            Assigning an array to another variable or passing an array into a method can lead to
                            unwanted changes. Modifying one array can inadvertently affect the other when doing this.
                        </li>
                    </ul>
                    <Heading text={`ArrayLists`}/>
                    <p className={`${styles.sectionText}`}>An ArrayList is a class provided by the Java Collections
                        Framework that implements the List interface. It is a dynamic, resizable array-like data
                        structure that allows you to store and manipulate elements of any type.</p>
                    <p className={`${styles.sectionText}`}>When using the ArrayLists in Java, it is important to import
                        the ArrayList class from the <span>java.util</span> package. To declare and initialize an
                        ArrayList, you must specify the type of elements the list will hold within angle
                        brackets &lt;&gt;. The ArrayList is then initialized using the <span
                            className={`${styles.sectionBold}`}>new</span> keyword, followed by the ArrayList and type
                        in angle brackets, as well as a pair of round brackets, as this is a constructor. You can also
                        specify the initial capacity of the ArrayList, by adding an integer value inside of the round
                        brackets.</p>
                    <Code text={`
//Import ArrayList class
import java.util.ArrayList;

//Declare an ArrayList of integers called numbers
ArrayList<Integer> numbers;
//Initialize the ArrayList, using the no-argument ArrayList constructor
numbers = new ArrayList<Integer>();

ArrayList<Integer> newNumbers;
//Initialize the ArrayList, setting the initial capacity to 40
newNumbers = new ArrayList<Integer>(40);
                    `}/>
                    <p className={`${styles.sectionText}`}>Primitive types (such as int, double, char, boolean, etc.)
                        cannot be used directly as type arguments for generics, including ArrayList. This is because
                        generics in Java can only work with reference types, not primitive types.</p>
                    <p className={`${styles.sectionText}`}>To work around this limitation, Java provides wrapper classes
                        for each primitive type. These wrapper classes (e.g., Integer for int, Double for double) are
                        reference types and can be used as type arguments for generics, including ArrayList.</p>
                    <p className={`${styles.sectionText}`}>Here are the most useful ArrayList methods:</p>
                    <Code text={`
// Creating and initializing an ArrayList
ArrayList<String> fruits = new ArrayList<>();

//.add(E obj) appends obj to end of list and returns true
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Orange");
//.add(int idx, E obj) is an overloaded version of .add()
//adds the element to the specified index
fruits.add(0, "Mango");

//.size() returns the size of the array
System.out.println("Size: " + fruits.size()); // 4

//.get(int idx) returns the element at position index in the list
System.out.println("First element: " + fruits.get(0)); // Mango

//.set(int idx, E obj) replaces the element at position idx with obj 
//and returns the element formerly at position idx
fruits.set(1, "Grapes");
System.out.println(fruits); // Mango, Grapes, Banana, Orange

//.remove(int idx)
//removes element from position idx, shifting everything else into place.
//Returns the element that was at idx
fruits.remove(2);
System.out.println(fruits); // Mango, Grapes, Orange
                    `}/>
                    <Code text={`
Output:
Size: 4
First element: Mango
Mango, Grapes, Banana, Orange
Mango, Grapes, Orange
                    `}/>
                    <p className={`${styles.sectionText}`}>The code segment above demonstrates the most useful methods
                        of ArrayLists. The ArrayList class has many more methods, which can be found in the Java
                        documentation.</p>
                    <Heading text={`Common Mistakes with ArrayLists`}/>
                    <ul className={`${styles.sectionText} list-disc ${styles.paddingX}`}>
                        <li className={'mt-4'}>
                            ArrayList is part of the java.util package, so it needs to be imported before using it.
                            Forgetting to import the class can lead to compilation errors.
                        </li>
                        <li className={'mt-4'}>
                            Modifying an ArrayList (e.g., adding or removing elements) while iterating over it using an
                            enhanced for loop can cause a ConcurrentModificationException. To avoid this, use a
                            traditional for loop.
                        </li>
                        <li className={'mt-4'}>
                            ArrayList is a generic class, but can be used without specifying the type
                            parameter (e.g. ArrayList list = new ArrayList();). This is known as using a raw type and
                            can lead to type safety issues. It is recommended to use generic ArrayLists by specifying
                            the type parameter (e.g. ArrayList&lt;String&gt; list = new ArrayList&lt;&gt;();).
                        </li>
                        <li className={'mt-4'}>
                            Using the square brackets ([]) to access elements in an ArrayList does not work and will
                            lead to a compilation error.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Array