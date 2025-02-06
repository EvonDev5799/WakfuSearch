"use strict";
let queryModule = new QueryModule(actions, itemTypes, [0, 1, 2, 3, 4, 5, 6, 7], 'fr');
let icg = undefined;
let mainDiv = document.createElement('div');
mainDiv.classList.add('main');
queryModule.onSearch((query) => {
    console.log(query);
    if (icg != undefined)
        icg.elem.remove();
    let results = process_request(items, query);
    icg = new ItemCardGrid(results, actions, 5, 'fr');
    mainDiv.appendChild(icg.elem);
});
mainDiv.appendChild(queryModule.elem);
document.body.appendChild(mainDiv);
