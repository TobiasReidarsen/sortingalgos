function performanceView() {
    // return;
    /*
    * #FIXME: If with countdown or NoCountdown is pressed first, then it throws a type error.
    *   "cannot read properties of undefined (reading 'time').
    *   But if another button is pressed, then it works.
    *   And if "both" is the first button pressed, then it works first time.
    * */
    let app = document.getElementById('performanceView');
    let html;

    const withCount = performanceRec.type.NumberArrSort.at(-1);
    const noCount = performanceRec.type.NoNumberArrSort.at(-1);

    html = `
    <div>
        <p>With countown: ${withCount.time} milliseconds, with count ${withCount.count} and length: ${withCount.arrayLength}</p>
        </br>
        <p>No countown: ${noCount.time} milliseconds, with count ${noCount.count} and length: ${noCount.arrayLength}</p>
    </div>
    `;

    app.innerHTML = html;
}