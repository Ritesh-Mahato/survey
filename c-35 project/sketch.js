var canvas,backgroundImg;
var surveyState=0;
var userCount;
var Users;
var database;
var form,user,survey;
var email;
function setup(){
    canvas= createCanvas(displayWidth - 20, displayHeight-30);
    database = firebase.database();
    survey = new Survey();
    survey.getState();
    survey.start();
}
function draw(){
    if (userCount===50){
        survey.update(1);
    }
    if (surveyState === 1){
       clear();
       survey.end();
    }   
     
}