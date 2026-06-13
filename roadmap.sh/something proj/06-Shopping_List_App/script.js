document.getElementById("btn").addEventListener("click", createElement); 

// function myFunction() {
//     document.getElementById("list").innerHTML
// }

// function addList () {
//     const newList = document.createElement("li");

//     const newContent = document.createTextNode("hello sigma");

//     newList.appendChild(newContent);

//     const currentDiv = document.getElementById("list");
//     document.body.insertBefore(newList, newCo)
//     // let sigmaList = <li>new item</li>
//     // newList.appendChild(sigmaList).insertAdjacentHTML("afterend", sigmaList);
// }

function createElement() {
    const addList = document.createElement("li"); //creating a new element

    const textNode = document.createTextNode(document.getElementById("inputItem").value); //creating a text node with the value of the input field

    addList.appendChild(textNode);

    document.getElementById("list").appendChild(addList);


    if (document.getElementById("inputItem").value == '') {
        alert("Input Item Name!")
    } else {
        document.getElementById("inputItem").value = ""; //Clear the input field after submitting
    }
}





