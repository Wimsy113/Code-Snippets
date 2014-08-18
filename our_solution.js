// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.Krystyna Ewing
//  2.


// 0. "YOU SIGNED... WHO?!"
// Woody Harrelson
// Age: 52
//Quote: "I don't believe in it. You ever see a lion limber up before it takes down a gazelle?"


// this is object literal notation:
var woody = {
    name: "Woody Harrelson",
    age: 52,
    quote: "I don't believe in it. You ever see a lion limber up before it takes down a gazelle?"
 }

// 1. "Here they Come!"
var adam = {}
adam.name = "Adam"
adam.age = 47
adam.quote = "That's your home! Are you too good for your home?"

var kristin = {
    name: "Kristin",
    age: 33,

    quote: "Do you wanna build a snowman?"

}    

// this is a basic use of a constructor 
var jim = new Client ()
    jim.name = "Jim",
    jim.age = 52,
    jim.quote = "So you're telling me there's a chance?"



// 2. "TIME IS MONEY!"

function Client(name,age,quote){
     this.name = name;
     this.age = age;
     this.quote = quote;
     
}



//YOUR CODE HERE!


// 3. "SHOW 'EM OFF!"

function printClient(client) {
    console.log("Here is " + client.name + " and their age is " + client.age + " and their favorite quote is " + client.quote)
}


printClient(adam)

// 4. "But wait, there's more!"

var clients = ["Woody", "Adam", "Kristin", "Jim"]
function printall(clients)
for (i = 0; i < clients.length; i ++) {
  printDisplay(clients[i]);
};

// 5.  ** BONUS **
  var moneyMaker(client) {
  adam.moneyMaker = 10,000,000
  kirstin.moneyMaker = 8,000,000
  woody.moneyMaker = 12,000,000
  jim.moneyMaker = 9,000,000

}  










// Driver Test Code

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
console.log(shooterMcGavin.constructor === Client);
console.log(shooterMcGavin.age === 48);
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";


console.log(woody.constructor === Object);
console.log(woody.age === 52);
console.log(woody.quote === "I don't believe in it. You ever see a lion limber up before it takes down a gazelle?") 

console.log(adam.name === "Adam")
console.log(adam.age === 47)
console.log(adam.quote === "That's your home! Are you too good for your home?")

console.log(kristin.age === 33)

console.log(jim.constructor === Client)
console.log(jim.age === 52) 

shooterMcGavin.showQuote();
//  6.  Your Reflection
// Really stunk to have to do this on my own, but that's been sort of a running theme when it comes to my gps sessions
// Learned some things with it, stumbled on some things as well, will be reading up more on constructors and whatnot to
//tru and improve my knowledge on this, I do know one thing, if you try to do too much too soon, you burn yourself out.
