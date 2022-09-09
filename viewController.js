function startSorting(whichSort) {
    sortingModel.unsortedArray = randomUnsortedArray(sortingModel.size, sortingModel.intSize);
    // creates a deep copy of unsortedArray.
    let array = JSON.parse(JSON.stringify(sortingModel.unsortedArray)); // #TODO: Find a better way to do this!
    let array1 = JSON.parse(JSON.stringify(sortingModel.unsortedArray)); // #TODO: Find a better way to do this!
    if (whichSort === 2) {
        performanceRecorder(0, array);
        performanceRecorder(1, array1);
    } else {
        performanceRecorder(whichSort, array);
    }
    sortingView();
    sortingModel.sortedArray = [];
    sortingModel.unsortedArray = [];
    performanceView();
}