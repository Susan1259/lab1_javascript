// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false; 
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true; 
            }
        }
        n--; 
    } while (swapped); 
    return arr;
}

function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i; 
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; 
            }
        }
        
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; 
    }

    const mid = Math.floor(arr.length / 2); 
    const left = mergeSort(arr.slice(0, mid)); 
    const right = mergeSort(arr.slice(mid)); 

    return merge(left, right); 
}
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
