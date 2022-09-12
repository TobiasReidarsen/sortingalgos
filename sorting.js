// TODO: implement local storage.

// Bubble Sort
// Compare each element and switch places if one is larger than the other


/*
* # TODO: Don't like this being here.
*    Find a way to put it directly into the performance object instead.
* */
let countBub = 0;


function randomUnsortedArray(size, intSize) {
    // #TODO: Make it so that a number appears only once, or a maximum of n times.
    let randoArray = [];

    for (let i = 0; i < size; i++) {
        const randomNumb = Math.floor(Math.random() * intSize);
        randoArray.push(randomNumb);

    }
    return randoArray;
}

function bubSort(array) {
    let swapped = true;
    let numberArr = array.length;
    do {
        swapped = false;
        for (let j = 0; j < numberArr - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swapped = true;
            }
        }
        numberArr--;
        countBub++;
    } while (swapped);
    return array;
}

function bubSortNoNumberArr(array) {
    let swapped = true;
    do {
        swapped = false;
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swapped = true;
            }
        }
        countBub++;
    } while (swapped);
    return array;
}


function performanceRecorder(whichSort) {

    let sortedArray = [];
    let array = Array.from(sortingModel.unsortedArray);


    const start = performance.now();
    if (whichSort === 0) {
        sortedArray.push(bubSort(array));
    } else if (whichSort === 1) {
        sortedArray = bubSortNoNumberArr(array);

    }

    const end = performance.now();
    const exeTime = end - start;

    sortingModel.sortedArray = sortedArray;

    //#TODO: add IntSize as well
    if (whichSort === 0) {
        performanceRec.type.NumberArrSort.push({time: exeTime, count: countBub, arrayLength: array.length});
    } else {
        performanceRec.type.NoNumberArrSort.push({time: exeTime, count: countBub, arrayLength: array.length});

    }
    saveToStorage();

    countBub = 0;

}

