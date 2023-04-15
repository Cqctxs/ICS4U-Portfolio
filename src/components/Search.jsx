import React from 'react'
import {styles} from "../styles.js";

const Search = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div className={`${styles.paddingX} max-w-5xl mx-auto flex flex-row items-start gap-5`}>
                <div>
                    <p className={`${styles.sectionHeadText}`}>Searching and Sorting</p>
                    <p className={`${styles.sectionHeadText}`}>I will split this into two separate sections later.</p>
                    <p className={`${styles.sectionSubHeadText}`}>Sequential Search</p>
                    <p className={`${styles.sectionText}`}>Sequential search is an algorithm which finds the location of
                        a target value in a list. The algorithm is very simple; scanning each element in the list and
                        comparing it to the target. If the element is equal to the target, the element was found.</p>
                    <p className={`${styles.sectionSubHeadText}`}>Binary Search</p>
                    <p className={`${styles.sectionText}`}>Binary search is another algorithm to find the location of a
                        target value in a list. For the binary search algorithm to work, the elements in the list must
                        be sorted. The algorithm is to compare the target to the middle value each time and then
                        splitting the list accordingly. If the target is smaller than the middle element, the we know
                        the element must be in the section of the list to the left of the middle element, since the list
                        is sorted. If the target is larger than the middle element, the target must be on the right side
                        of the list. Each time, the area to search is cut in half, making the algorithm faster than just
                        checking each element.</p>
                    <p className={`${styles.sectionSubHeadText}`}>Selection Sort</p>
                    <p className={`${styles.sectionText}`}>Selection sort is an algorithm used to sort a list of
                        elements. The first step in selection sort is to go through the entire list, finding the largest
                        element in the list. Once it finds the largest element, it swaps the largest element and the
                        element currently at the end location. The end of the list is now set as one lower than before,
                        since we already know that the end is sorted. This process then repeats until the list is
                        sorted.</p>
                    <p className={`${styles.sectionSubHeadText}`}>Insertion Sort</p>
                    <p className={`${styles.sectionText}`}>Insertion sort is another algorithm used to sort a list of
                        elements. The algorithm defines an index of the list which is sorted. In the beginning, the
                        sorted position is index 0, as there is nothing else to the left of it. It then takes the
                        element one index to the right, and putting that element into the correct location in the sorted
                        section with a series of swaps. The sorted index of the list is then increased by 1, since a
                        new element was sorted. This process is then repeated until the entire list is sorted.</p>
                    <p className={`${styles.sectionSubHeadText}`}>Merge Sort</p>
                    <p className={`${styles.sectionText}`}>Merge sort is another algorithm used to sort a list of
                        elements. Merge sort has two main steps, which are splitting and merging. First, the list is
                        split into two halves. Next, each of the two halves are sorted with merge sort again, being
                        split. After all halves have been split, they are merged together by taking the smallest element
                        from both. After all merges are complete, the result will be one sorted list.</p>
                    <p className={`${styles.sectionSubHeadText}`}>Quick Sort</p>
                    <p className={`${styles.sectionText}`}>Quick sort is another algorithm used to sort a list of
                        elements. The first step in quick sort is to choose an arbitrary element, which is called the
                        pivot. The list is then partitioned into three sections: one section with elements smaller than
                        the pivot, one section with elements equal to the pivot and one section with elements larger
                        than the pivot. The elements smaller and larger than the pivot are then sorted again with quick
                        sort. Once each partition has been sorted, the entire list will be sorted.</p>
                </div>
            </div>
        </section>
    )
}

export default Search