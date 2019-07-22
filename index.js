// Require packages
const robot = require('robotjs');

// Reduce mouse & keyboard delay
robot.setMouseDelay(2);
robot.setKeyboardDelay(2);

// Set x variables
const projects = 250;
const models = 850;
const importx = 650;
const manualx = 400;
const importFinishx = 950;
const maximise = 1170;
const nextx = 1200;
const centre = 650;
const inputProperty = 400;
const importPopupx = 550;

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
const importPopupy = 530;
const importFinishy = 490;
const nexty = 200;

// Set y variables for model setup homescreen
one = 330;
two = 355;
three = 380;
four = 405;
five = 430;
six = 455;
seven = 480;
eight = 505;
nine = 530;
ten = 555;
eleven = 580;


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

// Upload training file
const trainingUpload = () => {
  robot.moveMouse(importx,importTraining);
  robot.mouseClick('left');

  setTimeout(function() {
    robot.keyTap('down');
    robot.keyTap('down');
    robot.keyTap('enter');
  },500);

  setTimeout(function() {
    robot.moveMouse(importPopupx,importPopupy);
    robot.mouseClick('left');
    robot.typeString("C:\\Users\\jwbackhouse\\Google Drive\\Skarp\\DMway models\\Model files 14d\\birmingham\\birmingham(14)(30Jun) 1 T.csv");
    robot.keyTap('enter');
  },1000);

  setTimeout(function() {
    robot.moveMouse(importx,fourth);
    robot.mouseClick('left');
  },1500);

  setTimeout(function() {
    robot.moveMouse(importFinishx,importFinishy);
    robot.mouseClick('left');
  },2000);
};

// Upload validation file + click next
const validationUpload = () => {
  robot.moveMouse(importx,importValidation);
  robot.mouseClick('left');

  setTimeout(function() {
    robot.keyTap('down');
    robot.keyTap('down');
    robot.keyTap('enter');
  },500);

  setTimeout(function() {
    robot.moveMouse(importPopupx,importPopupy);
    robot.mouseClick('left');
    robot.typeString("C:\\Users\\jwbackhouse\\Google Drive\\Skarp\\DMway models\\Model files 14d\\birmingham\\birmingham(14)(30Jun) 1 V.csv");
    robot.keyTap('enter');
  },1000);

  setTimeout(function() {
    robot.moveMouse(importx,fourth);
    robot.mouseClick('left');
  },1500);

  setTimeout(function() {
    robot.moveMouse(importFinishx,importFinishy);
    robot.mouseClick('left');
  },2000);

  setTimeout(function() {
    robot.moveMouse(nextx,nexty);
    robot.mouseClick('left');
  },2500);
};


// Configure setup fields
const setup = () => {
  robot.moveMouse(inputProperty,one);
  robot.mouseClick('left');
  robot.keyTap('down');
  robot.keyTap('enter');

  robot.moveMouse(inputProperty,four);
  robot.mouseClick('left');
  robot.keyTap('up');
  robot.keyTap('enter');

  robot.moveMouse(inputProperty,five);
  robot.mouseClick('left');
  robot.keyTap('up');
  robot.keyTap('up');
  robot.keyTap('enter');

  robot.moveMouse(inputProperty,six);
  robot.mouseClick('left');
  robot.keyTap('up');
  robot.keyTap('up');
  robot.keyTap('enter');

  robot.moveMouse(inputProperty,seven);
  robot.mouseClick('left');
  robot.keyTap('up');
  robot.keyTap('up');
  robot.keyTap('enter');

  robot.moveMouse(inputProperty,eight);
  robot.mouseClick('left');
  robot.keyTap('up');
  robot.keyTap('up');
  robot.keyTap('enter');

  robot.moveMouse(inputProperty,nine);
  robot.mouseClick('left');
  robot.keyTap('up');
  robot.keyTap('up');
  robot.keyTap('enter');

  robot.moveMouse(inputProperty,ten);
  robot.mouseClick('left');
  robot.keyTap('up');
  robot.keyTap('up');
  robot.keyTap('enter');

  robot.moveMouse(inputProperty,eleven);
  robot.mouseClick('left');
  robot.keyTap('up');
  robot.keyTap('up');
  robot.keyTap('enter');

  robot.moveMouse(nextx,nexty);
  robot.mouseClick('left');
};

// Run upload functions and move to setup screen
// openDmway();
selectDmway();
// setTimeout(openModel,1000);
// setTimeout(nameNewModel,4000)
// setTimeout(setManualUpload,17000);
setTimeout(trainingUpload,1000);
setTimeout(validationUpload,4000);
// setTimeout(setup,1000);
