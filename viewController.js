function startSorting(whichSort) {
    sortingModel.unsortedArray = randomUnsortedArray(sortingModel.size, sortingModel.intSize);
    if (whichSort === 2) {
        performanceRecorder(0);
        performanceRecorder(1);
    } else {
        performanceRecorder(whichSort);
    }
    sortingView();
    sortingModel.sortedArray = [];
    sortingModel.unsortedArray = [];
    performanceView();
}