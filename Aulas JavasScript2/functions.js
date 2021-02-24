// Functions---------------------------------------------------------------
// Functions are a set steps put in code to do something
// Like eat, you go to the kitchen, grab food then eat it

const name = "Dev Ed";
const youtuber = "RocketSeat"

//Uppercassing The const Dev Ed
function toUpper(text) {
    const upperCased = text.toUpperCase();
    console.log(upperCased);
}
toUpper(name);
toUpper(youtuber);



//function() { }
function logger() { //Gathering data
    console.log(name); // Global can be use inside local, but local can't be use in Global
    console.log("Party time");
    console.log("Party time");
    console.log("Party time");
    console.log("Party time");
    console.log("Party time");
}

logger() //Running function

//Making a function that does math
function adder(num1, num2) {
    console.log(num1 + num2);
}

adder(5, 10);

//Modern JS 

// const toUpper = () => { }



