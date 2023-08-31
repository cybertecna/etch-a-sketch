function isNumber(value) {
    const conv = +value;
    if (conv) {
        return true;
    } else {
        return false;
    }
}

const eraseBtn = document.querySelector('#erase-btn') 
const mainContainer = document.querySelector('#main-container') 
let size = 4
let userInput = 4


eraseBtn.addEventListener('click', function() {
    resetGrid()
}
)

function resetGrid() {
    userInput = prompt("Choose the size of the box! (1-100)") 
    if (isNumber(userInput) === false || userInput < 0 || userInput > 100) {
        alert("Please enter a number from 1 to 100!")
        return
    }

    else if (isNumber(userInput) === true) {
        size = userInput
        generateGrid(size)
     }
}


function generateGrid(number) {

    mainContainer.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    mainContainer.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    for (let i = 0; i < number * number; i++) {
        const createBox = document.createElement("div");
        mainContainer.appendChild(createBox);
        createBox.classList.add("grid-div");
    }
    let newBox = document.querySelectorAll('.grid-div')

    for (let i = 0; i < number * number; i++) {
        newBox[i].style.background = "white";
        }
        for (let i = 0; i < number * number; i++) {
        newBox[i].addEventListener("mouseover", function() {
        newBox[i].style.background = "black";
    
        }
        )
        
}
}


generateGrid(32)
