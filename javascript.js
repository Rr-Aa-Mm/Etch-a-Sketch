gridBuilder();
function gridBuilder() {
    let gridContainer = document.querySelector('#myGrid');
    for (let i = 0; i < 16; i++) {
        let gridColumn = document.createElement('div');
        gridColumn.className = "flex row";
        for (let i = 0; i < 16; i++) {
            let gridVert = document.createElement('div');
            gridVert.className = "flex column square center";
            gridColumn.appendChild(gridVert);
        }
        gridContainer.appendChild(gridColumn);
        addBorders();
    }
}

addBorders("div");
function addBorders(divClass) {
    console.log("addBorders() is running now");
    let selectedDivs = document.querySelectorAll(divClass);
    let newArray = Array.from(selectedDivs);
    newArray.forEach((divClass) => {
        console.log(divClass.style.border);
        divClass.style.borderTop = "solid yellow";
        divClass.style.borderBottom = "solid blue";
        divClass.style.borderLeft = "solid lime";
        divClass.style.borderRight = "solid red";
    })
}

/*
buildGrid();
function buildGrid() {
    //start by building a column of 16!
    let gridColumn = document.createElement('div');
    gridColumn.className = "flex column";
    let gridContainer = document.querySelector('#myGrid');
    console.log(gridContainer);
    for (let i = 0; i <= 16; i++) {
        let gridVert = document.createElement('div');
        gridVert.className = "flex row spine center";
        gridColumn.appendChild(gridVert);
    }

    
    let gridSpine = document.querySelectorAll('.spine');
    console.log(gridSpine);
    gridSpine.forEach((gridRow) => {
        for (let i = 0; i <= 16; i++) {
            let square = document.createElement('div');
            square.ClassName = "square flex1";
            gridRow.appendChild(square);
        }
    })
    //finish by adding a row of 16 to each spot on the column!


    addBorders('div'); //repaints the borders onto the new divs
}
*/

