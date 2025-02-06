//alert("ok")
const myButton = document.getElementById("myButton");
//los eventos son acciones que se pueden realizar en un elemento del DOM 

const compteurmessage = document.getElementById("compteur");

let count = 0; 
myButton.addEventListener('click', () => {
    count ++;
    compteurmessage.textContent = count.toString();
    console.log(count); 
    if (count === 10) {
        myButton.textContent = "Mega click";
    }

    if (count ==100) {
        myButton.textContent = "Hyper click";
    }
});
 
 


