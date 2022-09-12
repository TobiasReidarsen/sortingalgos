const performanceRec = {
    type: {
        NumberArrSort: [], // #TODO: do {[]} instead?
        NoNumberArrSort: []
    }
}

function saveToStorage() {
    window.localStorage.setItem('performanceRec', JSON.stringify(performanceRec));
    let newObject = JSON.parse(window.localStorage.getItem('performanceRec'));
    console.log(newObject.type);
}

function clearStorage() {
    localStorage.clear();
}

