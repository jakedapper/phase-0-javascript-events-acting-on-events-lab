// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers, 10);
    if(left > 10) {
        dodger.style.left = `${left -1}px`;
    }
    console.log(`leftNumbers: ${leftNumbers}`);
    console.log("left: " + left);
}

document.addEventListener("keydown", function(e){
    if (e.key === "ArrowLeft"){
        moveDodgerLeft();
    }
});

function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px","");
    const right = parseInt(rightNumbers, 10);
    if (right < 360) {
        dodger.style.left = `${right + 1}px`
    }
    console.log(`rightnumbers: ${rightNumbers}`)
}

document.addEventListener("keydown", function(e){
    if (e.key === "ArrowRight"){
        moveDodgerRight();
    }
});