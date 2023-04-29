import React from 'react';
import {styles} from "../styles.js";
import Heading from "./Heading.jsx";
import Code from "./Code.jsx";

const Search = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div className={`${styles.paddingX} max-w-5xl mx-auto flex flex-row items-start gap-5 pb-32`}>
                <div>
                    <p className={`${styles.sectionHeadText}`}>Searching and Sorting</p>
                    <p className={`${styles.sectionText}`}>Searching and sorting are fundamental operations in computer
                        science and are commonly performed on arrays or other data structures to organize and retrieve
                        data efficiently. In Java, there are various algorithms and methods available for searching and
                        sorting data.</p>
                    <Heading text={`Time Complexity`}/>
                    <p className={`${styles.sectionText}`}>Time complexity is a measure of the amount of time taken by
                        an algorithm to run as a function of the input size. It provides an estimation of how the
                        algorithm's performance scales with increasing input size.</p>
                    <p className={`${styles.sectionText}`}>Time complexity is usually expressed using Big O notation.
                        The Big O notation describes the upper bound or worst-case scenario of an algorithm's time
                        complexity. It allows us to analyze the efficiency of an algorithm by ignoring constant factors
                        and focusing on the growth rate of the algorithm as the input size becomes arbitrarily
                        large.</p>
                    <p className={`${styles.sectionText}`}>The time complexity is determined by examining the number of
                        operations performed by the algorithm in relation to the input size. The most common types of
                        time complexity are:</p>
                    <ul className={`${styles.sectionText} list-disc ${styles.paddingX}`}>
                        <li className={'mt-4'}>
                            <span className={`${styles.sectionBold}`}>Constant Time Complexity (O(1)):</span> The
                            algorithm takes the same amount of time regardless of the input size. It has a constant
                            number of operations.
                        </li>
                        <li className={'mt-4'}>
                            <span className={`${styles.sectionBold}`}>Linear Time Complexity (O(n)):</span> The
                            algorithm's running time grows linearly with the input size. Each input element requires a
                            constant amount of time to process.
                        </li>
                        <li className={'mt-4'}>
                            <span className={`${styles.sectionBold}`}>Logarithmic Time Complexity (O(log n)):</span> The
                            algorithm's running time grows logarithmically with the input size. Each operation reduces
                            the search space by a constant factor.
                        </li>
                        <li className={'mt-4'}>
                            <span className={`${styles.sectionBold}`}>Polynomial Time Complexity (O(n^k)):</span> The
                            algorithm's running time grows as a polynomial function of the input size, where k is a
                            constant exponent.
                        </li>
                        <li className={'mt-4'}>
                            <span className={`${styles.sectionBold}`}>Exponential Time Complexity (O(k^n)):</span> The
                            algorithm's running time grows exponentially with the input size. Each increase in input
                            size multiplies the number of operations by a factor of k.
                        </li>
                    </ul>
                    <p className={`${styles.sectionText}`}>By analyzing the time complexity of algorithms, developers
                        can compare different algorithms, identify bottlenecks, and make informed decisions about
                        algorithm selection and optimization to achieve efficient solutions.</p>
                    <p className={`${styles.sectionSubHeadText}`}>Sequential Search</p>
                    <p className={`${styles.sectionText}`}>Sequential search is an algorithm which finds the location of
                        a target value in a list. The algorithm is very simple; scanning each element in the list and
                        comparing it to the target. If the element is equal to the target, the element was found.</p>
                    <p className={`${styles.sectionText}`}>Here is an implementation of sequential search in Java:</p>
                    <Code text={`
public static int sequentialSearch(int[] arr, int x) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == x)
            return i;
    }
    return -1;
}
                    `}/>
                    <p className={`${styles.sectionText}`}>Time Complexity: <span
                        className={`${styles.sectionBold}`}>O(n)</span></p>
                    <p className={`${styles.sectionSubHeadText}`}>Binary Search</p>
                    <p className={`${styles.sectionText}`}>Binary search is another algorithm to find the location of a
                        target value in a list. For the binary search algorithm to work, the elements in the list must
                        be sorted. The algorithm is to compare the target to the middle value each time and then
                        splitting the list accordingly. If the target is smaller than the middle element, the we know
                        the element must be in the section of the list to the left of the middle element, since the list
                        is sorted. If the target is larger than the middle element, the target must be on the right side
                        of the list. If the target is the middle value, then the target has been found. Each time, the
                        area to search is cut in half, making the algorithm faster than just checking each element.</p>
                    <p className={`${styles.sectionText}`}>Here are two implementations of binary search in Java:</p>
                    <Code text={`
public static int iterativeBinarySearch(int[] arr, int x) {
    int l = 0, r = arr.length - 1;
    while (l <= r) {
        int m = l + (r - l) / 2;
        
        //Check if x is at mid
        if (arr[m] == x) return m;
        
        //If x greater, ignore left half
        if (arr[m] < x) l = m + 1;
        
        //If x is smaller, ignore right half
        else r = m - 1;
    }
    //If this part is reached, element was not present
    return -1;
}
                    `}/>
                    <Code text={`
public static int recursiveBinarySearch(int[] arr, int l, int r, int x) {
    if (r >= l) {
        int mid = l + (r - l) / 2;
        
        //Check if x is at mid
        if (arr[mid] == x) return mid;
            
        //If x greater, ignore left half
        if (arr[mid] < x) return binarySearch(arr, mid + 1, r, x);
            
        //If x is smaller, ignore right half
        return binarySearch(arr, l, m - 1, x);
    }
    //If this part is reached, element was not present
    return -1;
}
                    `}/>
                    <p className={`${styles.sectionText}`}>Time Complexity: <span
                        className={`${styles.sectionBold}`}>O(log(n))</span></p>
                    <p className={`${styles.sectionSubHeadText}`}>Selection Sort</p>
                    <p className={`${styles.sectionText}`}>Selection sort is an algorithm used to sort a list of
                        elements. The first step in selection sort is to go through the entire list, finding the largest
                        element in the list. Once it finds the largest element, it swaps the largest element and the
                        element currently at the end location. The end of the list is now set as one lower than before,
                        since we already know that the end is sorted. This process then repeats until the list is
                        sorted.</p>
                    <p className={`${styles.sectionText}`}>Here is an implementation of selection sort in Java:</p>
                    <Code text={`
public static void selectionSort(int[] arr) {
    int n = arr.length;
    
    //Move boundary of unsorted array
    for (int i = 0; i < n - 1; i++) {
    
        //Find the minimum element in unsorted section
        int minIdx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        
        //Swap the element of the boundary of the unsorted array and the minimum
        int temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
    }
}
                    `}/>
                    <p className={`${styles.sectionText}`}>Time Complexity: <span
                        className={`${styles.sectionBold}`}>O(n^2)</span></p>
                    <p className={`${styles.sectionSubHeadText}`}>Insertion Sort</p>
                    <p className={`${styles.sectionText}`}>Insertion sort is another algorithm used to sort a list of
                        elements. The algorithm defines an index of the list which is sorted. In the beginning, the
                        sorted position is index 0, as there is nothing else to the left of it. It then takes the
                        element one index to the right, and putting that element into the correct location in the sorted
                        section by shifting the elements to the right. The sorted index of the list is then increased by
                        1, since a new element was sorted. This process is then repeated until the entire list is
                        sorted.</p>
                    <p className={`${styles.sectionText}`}>Here is an implementation of insertion sort in Java:</p>
                    <Code text={`
public static void insertionSort(int[] arr) {
    int n = arr.length;
    
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        
        //Shift elements to the right until in correct location
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        ///Set the correct location of the key
        arr[j + 1] = key;
    }
}
                    `}/>
                    <p className={`${styles.sectionText}`}>Time Complexity: <span
                        className={`${styles.sectionBold}`}>O(n^2)</span></p>
                    <p className={`${styles.sectionSubHeadText}`}>Merge Sort</p>
                    <p className={`${styles.sectionText}`}>Merge sort is another algorithm used to sort a list of
                        elements. Merge sort has two main steps, which are splitting and merging. First, the list is
                        split into two halves. Next, each of the two halves are sorted with merge sort again, being
                        split. After all halves have been split, they are merged together by taking the smallest element
                        from both. After all merges are complete, the result will be one sorted list.</p>
                    <p className={`${styles.sectionText}`}>Here is an implementation of merge sort in Java:</p>
                    <Code text={`
public static void merge(int[] arr, int l, int m, int r) {
    //Find the sizes of the to arrays to be merged
    int n1 = m - l + 1;
    int n2 = r - m;
    
    //Create temporary arrays
    int tempL[] = new int[n1];
    int tempR[] = new int[n2];
    
    //Copy the data into the temporary arrays
    for (int i = 0; i < n1; i++)
        tempL[i] = arr[l + i];
    for (int j = 0; j < n2; j++)
        tempR[j] = arr[m + 1 + j];
        
    //Initial indices of first and second arrays
    int i = 0, j = 0;
    
    //Initial index of merged array
    int k = l;
    
    //Merge arrays together by taking the smallest value from each
    while (i < n1 && j < n2) {
        if (tempL[i] <= tempR[j]) {
            arr[k] = tempL[i];
            i++;
        } else {
            arr[k] = tempR[j];
            j++;
        }
        k++;
    }
    
    //Copy remaining elements of tempL if any
    while (i < n1) {
        arr[k] = tempL[i];
        i++;
        k++;
    }
    
    //Copy remaining elements of tempR if any
    while (j < n2) {
        arr[k] = tempR[j];
        j++;
        k++;
    }
}

public static void mergeSort(int[] arr, int l, int r) {
    if (l < r) {
        //Find the middle point
        int m = l + (r - l) / 2;
        
        //Sort first and second halves
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        
        //Merge the sorted halves
        merge(arr, l, m, r);
    }
}
                    `}/>
                    <p className={`${styles.sectionText}`}>Time Complexity: <span
                        className={`${styles.sectionBold}`}>O(n*log(n))</span></p>
                    <p className={`${styles.sectionSubHeadText}`}>Quick Sort</p>
                    <p className={`${styles.sectionText}`}>Quick sort is another algorithm used to sort a list of
                        elements. The first step in quick sort is to choose an arbitrary element, which is called the
                        pivot. The list is then partitioned into three sections: one section with elements smaller than
                        the pivot, one section with elements equal to the pivot and one section with elements larger
                        than the pivot. The elements smaller and larger than the pivot are then sorted again with quick
                        sort. Once each partition has been sorted, the entire list will be sorted.</p>
                    <p className={`${styles.sectionText}`}>Here is an implementation of quick sort in Java:</p>
                    <Code text={`
public static int partition(int[] arr, int low, int high) {
    //Choosing the pivot
    int pivot = arr[high];

    //Index of smaller element and indicates the right position of pivot found so far
    int i = (low - 1);
    
    for (int j = low; j <= high - 1; j++) {
        //If current element is smaller than the pivot
        if (arr[j] < pivot) {
        
            //Increase the index of the smaller element
            i++;
            
            //Swap elements at i and j
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    
    //Swaps elements at i + 1 and high
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return (i + 1);
}

public static void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        //pi is the partitioning index
        int pi = partition(arr, low, high);

        //Sort elements to the left of and to the right of the partitioning index
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
                    `}/>
                    <p className={`${styles.sectionText}`}>Time Complexity: <span
                        className={`${styles.sectionBold}`}>O(n*log(n))</span></p>
                    <Heading text={`Common Mistakes`}/>
                    <p className={`${styles.sectionText}`}>There aren't many mistakes that you can make while searching
                        and sorting, other than implementing the algorithms incorrectly. However the one mistake that
                        you can make is choosing inefficient algorithms for the task. While searching with sequential
                        search is easy, it is not as efficient as binary search as the dataset becomes larger and
                        larger. The same goes with selection sort and insertion sort. They are easy to code, but are not
                        efficient as the data becomes larger. More efficient algorithms like merge sort and quick sort
                        should be considered, as they are more efficient.</p>
                </div>
            </div>
        </section>
    )
}

export default Search