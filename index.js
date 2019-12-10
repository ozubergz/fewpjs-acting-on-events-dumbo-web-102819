// Your code here


document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if(e.key === "ArrowRight") {
        moveDodgerRight();
    }
});

//get element target
let dodger = document.getElementById('dodger');

//function to make dodger move left
function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10);
    if(left > 0) {
        dodger.style.left = `${left - 1}px`
    }
}


//function to make dodger move right
function moveDodgerRight() {
    let rightNumbers = dodger.style.left.replace('px', '');
    let right = parseInt(rightNumbers, 10);

    // console.log()

    if(right < 360) {
        dodger.style.left = `${right + 1}px`;
    }

    // console.log(dodger.style.left)
}


// dodger.style.backgroundColor = "#FF69B4";
// dodger.style.bottom = "100px";
// dodger.style.bottom = "0px";