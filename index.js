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

// Set y variables for model load screen
const manualy = fourth;
const importTraining = 420;
const importValidation = 560;
const importFolder = 160;
const importFinishy = 490;
const nexty = 200;


// Open DMway
const openDmway = () => {
  robot.moveMouse(5,180);
  robot.mouseClick('left');
  setTimeout(function() {
    robot.moveMouse(maximise,20);
    robot.mouseClick('left');
  },12000)
};

// Open model
const openModel = () => {
  robot.moveMouse(projects,fifth);
  robot.mouseClick('left');
  setTimeout(function() {
    robot.moveMouse(models,first);
    robot.mouseClick('left','double');
  },500)
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
};

const next = () => {
  setTimeout(function() {
    robot.moveMouse(nextx,nexty);
    robot.mouseClick('left');
  },1000);
};

// Run upload functions and move to setup screen
openDmway();
setTimeout(openModel,13000);
setTimeout(setManualUpload,17000);
setTimeout(trainingUpload,17500);
setTimeout(validationUpload,24000);
setTimeout(next,28000);
