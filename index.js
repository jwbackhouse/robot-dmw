// Require packages
const robot = require('robotjs');

// Reduce mouse delay
robot.setMouseDelay(2);

// Set x variables
const projects = 250;
const models = 850;
const importx = 650;
const manualx = 400;
const importFinishx = 950;
const maximise = 1170;
const nextx = 1200;
const centre = 650;

// x-positions (inclusive)
// Input fields - property = 400 - 480

// Set y variables for homescreen
const buttons = 160
const first = 240;
const second = 260;
const third = 280;
const fourth = 300;
const fifth = 320;
const sixth = 340;
const seventh = 370;
const eighth = 390;
const ninth = 415;

// Set y variables for new model popup
const newName = 250;
const newDesc = 280;
const newAccept = 340;

// Set y variables for model load screen
const manualy = fourth;
const importTraining = 420;
const importValidation = 560;
const importFolder = 160;
const importFinishy = 490;
const nexty = 200;

// Set y variables for model setup homescreen
one = 320;
two = 360;
three = 380;
four = 410;


// Open DMway
const openDmway = () => {
  robot.moveMouse(5,180);
  robot.mouseClick('left');
  setTimeout(function() {
    robot.moveMouse(maximise,20);
    robot.mouseClick('left');
  },12000)
};

// Select DMway when already open
const selectDmway = () => {
  robot.moveMouse(5,180);
  robot.mouseClick('left');
};

// Open model
const openModel = () => {
  robot.moveMouse(projects,second);
  robot.mouseClick('left');
  setTimeout(function() {
    robot.moveMouse(models,buttons);
    robot.mouseClick('left');
  },500)
};

// Name new model
const nameNewModel = () => {
  robot.moveMouse(centre,newName);
  robot.mouseClick('left');
  robot.typeString('NewModel1');
  setTimeout(function() {
    robot.moveMouse(centre,newDesc);
    robot.mouseClick('left');
    robot.typeString('Description');
  },500);
  setTimeout(function() {
    robot.moveMouse(centre,newAccept);
    robot.mouseClick('left');
  },1000);

};

// Set upload to manual setting
const setManualUpload = () => {
  robot.moveMouse(manualx,manualy);
  robot.mouseClick('left');
  robot.keyTap('down');
  robot.keyTap('enter');
};

// Function to upload training file
const trainingUpload = () => {
  robot.moveMouse(importx,importTraining);
  robot.mouseClick('left');

  setTimeout(function() {
    robot.keyTap('down');
    robot.keyTap('down');
    robot.keyTap('enter');
  },500);

  setTimeout(function() {
    robot.moveMouse(importx,importFolder);
    robot.mouseClick('right');
  },1000);

  setTimeout(function() {
    robot.keyTap('down');
    robot.keyTap('down');
    robot.keyTap('down');
    robot.keyTap('enter');
  },1400);

  setTimeout(function() {
    robot.typeString("C:\\Users\\jwbackhouse\\Google Drive\\Skarp\\DMway models\\Model files 14d\\birmingham");
    robot.keyTap('enter');
  },2000);

  setTimeout(function() {
    robot.moveMouse(importx,fourth);
    robot.mouseClick('left');
  },3000);

  setTimeout(function() {
    robot.moveMouse(importFinishx,importFinishy);
    robot.mouseClick('left');
  },4000);
};

// Function to upload validation file
const validationUpload = () => {
  setTimeout(function() {
    robot.moveMouse(importx,importValidation);
    robot.mouseClick('left');
  },100);

  setTimeout(function() {
    robot.keyTap('down');
    robot.keyTap('down');
    robot.keyTap('enter');
  },700);

  setTimeout(function() {
    robot.moveMouse(importx,importFolder);
    robot.mouseClick('right');
  },1200);

  setTimeout(function() {
    robot.keyTap('down');
    robot.keyTap('down');
    robot.keyTap('down');
    robot.keyTap('enter');
  },1400);

  setTimeout(function() {
    robot.typeString("C:\\Users\\jwbackhouse\\Google Drive\\Skarp\\DMway models\\Model files 14d\\birmingham");
    robot.keyTap('enter');
  },2000);

  setTimeout(function() {
    robot.moveMouse(importx,fourth);
    robot.mouseClick('left');
  },3000);

  setTimeout(function() {
    robot.moveMouse(importFinishx,importFinishy);
    robot.mouseClick('left');
  },4000);

  setTimeout(function() {
    robot.moveMouse(nextx,nexty);
    robot.mouseClick('left');
  },5000);
};


// Configure setup fields
const setup = () => {
  robot.moveMouse(400,one);
  robot.mouseClick('left');
  robot.keyTap('down');
  robot.keyTap('down');
  robot.keyTap('enter');
};

// Run upload functions and move to setup screen
// openDmway();
selectDmway();
setTimeout(openModel,1000);
setTimeout(nameNewModel,4000)
// setTimeout(setManualUpload,17000);
// setTimeout(trainingUpload,17500);
// setTimeout(validationUpload,24000);
// setTimeout(setup,28000);

// Required for testing once DMway already launched
