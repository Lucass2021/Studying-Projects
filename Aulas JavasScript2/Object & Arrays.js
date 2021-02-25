//Contatenação------------------------------
const name = "Lucas";
const age0 = 20

console.log(`Olá meu nome é ${name} e eu tenho ${age0} anos`)

// if else----------------------------------------

const age = 10;
if (age > 18) {
    console.log("You are good to go");  // Regular if
} else if (age < 15) {
    console.log("Damn son, you are lost."); // Extra if
} else {
    console.log("You shall not pass"); // Regular else
}

//Arrays------------------------------------------------
// Variables that you can put more variables inside

const schedule = ["Wake up", 24, true, "Teste"]

schedule.push("New array data");

console.log(schedule)
console.log(schedule[2])
console.log(schedule.length)

//Object and Keywords-----------------------------------

const user = {
    name: "Lucas",
    age: 19,
    married: false,
    purchase: ["phone", "car", "laptop"],
};

console.log(user.purchase)

function sayName() {
    console.log(this.name);
};
