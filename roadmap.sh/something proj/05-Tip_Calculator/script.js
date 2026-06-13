// function myCalculation(){
//     let x = document.getElementById("billAmount");
//     let y = document.getElementById("tipPercentage");
//     let z = x * y;
//     document.getElementById("result").innerHTML = z;
// }

// document.getElementById("btn").addEventListener("click", myCalculation);


function myFunction() {
   const x = parseFloat(document.getElementById("billAmount").value) || 0;
   const y = parseFloat(document.getElementById("tipPercentage").value) || 0;
   const z = (x * (y / 100));
   const t = z.toFixed(2);
   document.getElementById("tipResult").innerHTML ="The Tip is: " + t;
   document.getElementById("billResult").innerHTML = "The Total is: " +  (x + z);
}

document.getElementById("btn").addEventListener("click", myFunction);