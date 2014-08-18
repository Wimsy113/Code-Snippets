// I worked on this challenge by myself!
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
  // Mission 1: Rescue Mission
 // move down x2
 // move right
 // move up x2
 // move right x2
 // move down
 // ATTACK!!!

this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

 // Mission 2: Grab The Mushroom
// move up
// move right
// move left
// move up
// ATTACK!!!

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

// Mission 3: Drink Me
// move right
// attack 
// move right
// move down 
// move up 
// move right
// ATTACK!!!

this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

 // Mission 4: Taunt The Guards
// bust down door:
// move right
// bust down door

 // kill all guards
 // move right
 // say "Hey there!"
 // move left
 // move left
 // say "ATTACK!!!"

 // get Phoebe to follow you throught the dungeon
 // move right
 // say "Follow me!"
 // move right x2
 // move up
 // move right
 // say "What's Up!"
 // move down
 // move right
 // move up
 // move right x2

this.moveRight();
this.bustDownDoor();

// Delete the "//" in front of each line below.

this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

//Get Phoebe to follow you through the dungeon

this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("What's up?");
this.moveDown();
this.moveLeft();
this.moveUp();
this.moveRight();
this.moveRight();
 	
// Mission 5: IT'S A TRAP!!!
// move down x2
// say "Hello!"
// move up x2

 this.moveDown();
 this.moveDown();
 this.say("Hello!");
 this.moveUp();
 this.moveUp();

//  Mission 6: Break Into The Prison!"

// Phoebe is friend
// Gordon is friend
// Lucas is friend
// Marcus is friend
// Robert is friend
// William is friend
// Brack is not friend
// Gort is not friend
// Grul 'Thock is not friend
// Krogg is not friend

// Write this isFriend(name) spell to tell friend from foe.
// Return true for friends' names, false for ogres' names.

if(name === "William")
    return true;
if(name === "Krogg")
    return false;  
if(name ==="Lucas")
return true;

if(name==="Marcus")
return true;

if(name==="Robert")
return true;

if(name==="William")
return true;

if(name==="Gordon")
return true;

if(name==="Brack")
return false;

if(name==="Gort")
return false;

if(name==="Grul 'Thock")
return false;

if(name==="Krogg")
return false;

 // Mission 7: Taunt:

 // say something x4

this.say("Hey!");

// Lure the ogre right into your arrow trap
// By saying something to him
// Anything works!

this.say("What's up?");
this.say("Come on over!");
this.say("Yes");

// Mission 8: Cowardly Taunt:
// move to a place where most ogres can hear you
// say anything
// RUN!! 

this.moveXY(50, 27);
this.say("What's up");
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.

this.say("I can lure them in here.");

// move to where the ogres can hear you

// ay something!

// hide behind the towers

// Mission 9: Commanding Followers:
// move over to soldiers
// make them follow you
// move over to ogres
// make soldiers kill ogres

this.moveXY(60, 63);
this.say("Follow me!");
this.moveXY(64, 44);
this.say("Attack!");

// saying something with "follow" in it will get nearby soldiers
// to follow you

// Saying  something with "attack" will make nearby soldiers attack

// Make sure Tharin is safe!

//Mission 10: Mobile Artillery
// move over to ogres 1
// kill all ogres 1
// move over to ogres 2
// kill all ogres 2 x2
// move over to ogres 3
// kill all gores x2 

this.moveXY(30, 26);  
this.attackXY(46, 5);  
this.moveXY(57, 32);  
this.attackXY(67, 50);  
this.attackXY(63, 44);  
this.moveXY(47, 42);  
this.attackXY(47, 62);  
this.attackXY(47, 50);  

// Utilizing the numbers above will aid in the destruction of your enemies
// Each attack is ranged, so the closer you are the stronger the attack
//Some attacks land right in the middle of the group!!


  
//Release 3: Answer the following questions

//When you are finished with all of the campaigns, answer the following questions. You may want to look at some resources on JavaScript before answering.

//What is this referring to? Think programming-wise rather than in the terms of the game.

//In JavaScript, "this" is in reference to the object in which the program is going to be attributed to.



//What does the () do in JavaScript?

//The brackets or parenthesis are used as an encapsulation mechnism when you enter a function or a variable or a method

//What is the point of the semicolons?

//The nifty semicolon means that is the end of the statement, and are moving on to another string in the method


//Release 4: Reflect
 
// Reflection:
// Write your reflection here.

//While this was a doozy in some spots (i don't know if it was my computer or what but I kept having issues') It was fun!
//Javascript is NOT as easy as most people claim it to be as a matter of fact it is the opposite at least for me.
//This challenge was really cool and being able to sit here and actually go through what each action was for
// I think that's nice to break things down so that you understand them better.
//all and all, it was a fun thing to do
