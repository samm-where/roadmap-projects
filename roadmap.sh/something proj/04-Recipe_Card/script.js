// // v1 
// function myFunction () {
//     var x = document.getElementById("ign");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }


// v2
document.getElementById("btnIngredient").addEventListener("click", myFunction);

function myFunction() {
    let x = document.getElementById("ign");
    let btn = document.getElementById("btnIngredient");
    if (x.style.display === "none") {
        x.style.display = "block";
        btnIngredient.textContent = "Hide Ingredients";
    } else {
        x.style.display = "none";
        btnIngredient.textContent = "Show Ingredients";
    }
}

document.getElementById("btnDirection").addEventListener("click", myFunction2);

function myFunction2() {
    let y = document.getElementById("dir"); 
    let btn = document.getElementById("btnDirection");
    if (y.style.display === "none") {
        y.style.display = "block";
        btnDirection.textContent = "Hide Directions";
    } else {
        y.style.display = "none";
        btnDirection.textContent = "Show Directions";
    }
}