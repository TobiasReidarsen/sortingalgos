window.onload = function () {
    sortingView();
}

function sortingView() {
    let app = document.getElementById('sortingView');
    let html = ``;

    html += `
    <div>
        <ul>
            <li>Sorted Array: ${sortingModel.sortedArray}</li> 
            <li>Unsorted array: ${sortingModel.unsortedArray}</li> 
        </ul>    
    </div>
        <div>
            How big do you want the array to be: 
            <input type="number" placeholder="10" onchange="sortingModel.size = this.value" /> </br>
            How big do you want the biggest number to be: 
            <input type="number" placeholder="10" onchange="sortingModel.intSize = this.value" />
        </div>
        <div>
            Which bubble sort version to use:
            <button onclick="startSorting(0)">With countdown</button>
            <button onclick="startSorting(1)">No countdown</button>
            <button onclick="startSorting(2)">Both</button>
            <button onclick="clearStorage()">Clear localStorage</button>
        </div>
    `;

    app.innerHTML = html;

}