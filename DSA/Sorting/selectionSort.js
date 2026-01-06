
function selectionSort(arr) {
    let arrLen = arr.length // Get the length of the array

    // Outer loop: Iterate through each element of the array
    for (i = 0; i < arrLen; i++) {
        // Assume the current element is the minimum
        let minIndex = i

        // Inner loop: Find the minimum element in the remaining unsorted part
        for (red = i + 1; red < arrLen; red++) {
            if (arr[red] < arr[minIndex]) {
                minIndex = red // Update minIndex if a smaller element is found
            }
        }
       // If the minimum element is not the current element, swap them
        if (minIndex !== i) {
            // ES6 swap using destructuring assignment
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr
}

//Usage
const array = [75, 30, 18, 23, 11];
console.log("Original array:", array);
const sortedArray = selectionSort(array);
console.log("Sorted array:", sortedArray);