//Add 16x16 grid of sqaure divs

let dim = 16;
addSquares(dim);

function applyNthChild(step) {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square, index) => {
        if ((index) + 1 % step === 0) { // index is zero-based, so we add 1
            console.log(index.toString() + " % " + step.toString());
            square.style.marginLeft = "0";
            square.style.borderLeftWidth = "3px";
        }
    });
}

//Change dimensions of grid with button (remove old and add new squares)
let button = document.querySelector("button");
button.addEventListener("click", (e) => {
    let dimval = 0;

    while (dimval > 100 || dimval < 1) {
        dimval = prompt("Enter dimension (100 max)");
        if (dimval === null) return;
        dimval = parseInt(dimval, 10);

    }

    removeSquares();
    addSquares(dimval);
});

function removeSquares() {
    sqs = document.querySelectorAll(".square");
    sqs.forEach(square => {
        square.remove();
    });
}

function addSquares(dimen) {
    let container = document.querySelector(".container");
    container.innerHTML = '';
    for (let i = 0; i < dimen * dimen; i++) {
        let sq = document.createElement("div");
        sq.classList.add("square");
        sq.style.width = `calc(100% / ${dimen})`;
        sq.style.paddingBottom = `calc((100% / ${dimen}) - 6px)`;
        container.appendChild(sq);
    }
    AddSketching();
    applyNthChild(dimen);
}

//Etch the sketch
function AddSketching() {
    let sqs = document.querySelectorAll(".square");
    sqs.forEach(square => {
        square.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "grey";
        });
    });
}

AddSketching();