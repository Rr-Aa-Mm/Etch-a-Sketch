let selectedColor = "#65ff00";

colorButtonBuilder();
function colorButtonBuilder() {
    let buttonContainer = document.getElementById("buttonContainer");
    let colors = ["Slime Green", "Mega Purple", "Blue Lightning", "Laser Gold", "Vampire Red"];
    let colorsHEX = ["#65ff00", "#FF00FF", "#7FDBFF", "#FFDC00", "#FF4136"];
    for (let i =0; i < colors.length; i++) {
        let colorButton = document.createElement("button");
        colorButton.classList.add("colorButton");
        colorButton.name = colors[i];
        colorButton.value = colors[i];
        colorButton.innerText = colors[i];
        colorButton.style.backgroundColor = colorsHEX[i];
        colorButton.addEventListener("click", function() {
            selectedColor = colorButton.style.backgroundColor;
            console.log("color updated to" + colorButton.style.backgroundColor);
        })
        console.log(colorButton);
        buttonContainer.appendChild(colorButton);

    }
}

gridBuilder();
function gridBuilder() {
    let gridContainer = document.querySelector('#myGrid'); //build the grid container
    for (let i = 0; i < 100; i++) {
        let gridColumn = document.createElement('div'); // build a column, 16 times
        gridColumn.className = "flex row";
        for (let i = 0; i < 100; i++) {
            let gridSquare = document.createElement('div'); //create a square, 16 times
            gridSquare.className = "flex column square center changeColor";
            gridSquare.id = i;
            gridSquare.addEventListener("mouseover", function() {
                //console.log(gridSquare);
                gridSquare.style.backgroundColor = selectedColor;
            });
            /*
            gridSquare.addEventListener("touchmove", function() {
                console.log("touchmove: " + gridSquare);
                gridSquare.style.backgroundColor = "green";
            });
            */
           /*
            gridSquare.addEventListener("touchstart", e => {
                [...e.changedTouches].forEach(touch => {
                    const dot = document.createElement('div');
                    dot.classList.add("dot");
                    dot.style.top = `${touch.pageY}px`;
                    dot.style.left = `${touch.pageX}px`;
                    dot.id = touch.identifier;
                    gridSquare.append(dot);
                })
                console.log(e)
            });
            
            gridSquare.addEventListener("touchmove", e=> {
                [...e.changedTouches].forEach(touch => {
                    const dot = document.createElement('div');
                    dot.classList.add("dot");
                    dot.style.top = `${touch.pageY}px`;
                    dot.style.left = `${touch.pageX}px`;
                    dot.id = touch.identifier;
                    gridSquare.append(dot);
                })
            })
            */
            gridSquare.addEventListener("touchmove", e=> {
                //console.log([...e.changedTouches]);
                console.log([...e.changedTouches]);
                [...e.changedTouches].forEach(touch => {
                    /*
                    console.log(e);
                    const eventTarget = e.target;
                    eventTarget.classList.add("changeToRed");
                    console.log(eventTarget);
                    */

                    /*
                    const dot = document.createElement('div');
                    dot.classList.add("dot");
                    dot.style.top = `${touch.pageY}px`;
                    dot.style.left = `${touch.pageX}px`;
                    dot.id = touch.identifier;
                    gridSquare.append(dot);
                    */
                })
            })

            /*
            gridSquare.addEventListener("touchend", e => {
                [...e.changedTouches].forEach(touch => {
                    const dot = document.getElementById(touch.identifier);
                    dot.remove();
                })
            });
            */

            gridColumn.appendChild(gridSquare); //append each built square into the built column
        }
        gridContainer.appendChild(gridColumn); //append each built column (each containing 16 squares, into the grid container

        
        //addBorders();
    }
}

//addBorders("div");
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

