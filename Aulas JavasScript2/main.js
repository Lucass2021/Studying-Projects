//For Loop and While Loop--------------------------------------------------------

const names = ["Ed", "John", "Maria", "Eliza", "Burrito", "Harry", "Potter"];

for (name of names) {
    console.log(`Hello there ${name}`);
}


let loading = 0;

while (loading < 100) {
    console.log("Website is loading");

    loading++;
}

//Dom manipulation---------------------------------------------

//Acess element in HTML
const text = document.querySelector(".title");
const button = document.querySelector(".change-color");

text.style.color = "red";
button.style.background = "purple";
