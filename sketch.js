var database;
var canvas, backgroundImg;
var gameState=0;
var playerCount=0;
var form, game, player;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

 
}

function draw(){
  background("white");
  
  
}



function showError(){
  console.log("Error in writing to the database");
}
