// Require packages
const robot = require('robotjs');

// Reduce mouse & keyboard delay
robot.setMouseDelay(2);
robot.setKeyboardDelay(2);


let inputType = '';

// Set x variables
const projects = 250;
const modelx = 850;
const importx = 650;
const manualx = 400;
const importFinishx = 950;
const maximise = 1170;
const nextx = 1200;
const centre = 650;
const inputProperty = 410;
const importPopupx = 550;

// Set y variables for homescreen
const newModel = 160
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
one = 325;
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
twelve = 605;
thirteen = 630;


// Set variable valuables
let settings = {project:first, model:first, name:"Test 1", description:"First test", training:"C:\\Users\\jwbackhouse\\Google Drive\\Skarp\\DMway models\\Model files 14d\\birmingham\\birmingham(14)(30Jun) 1 T.csv", validation:"C:\\Users\\jwbackhouse\\Google Drive\\Skarp\\DMway models\\Model files 14d\\birmingham\\birmingham(14)(30Jun) 1 V.csv"}
let setupSettingsArray = [[one,"characterKey"],[four,"target"],[five,"exclude"],[six,"exclude"],[seven,"exclude"],[eight, "exclude"],[nine,"exclude"]];

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
  robot.moveMouse(projects, settings.project);
  robot.mouseClick('left');
  setTimeout(function() {
    robot.moveMouse(modelx, settings.model);
    robot.mouseClick('left','double');
  },1000)
};

// Name new model
const nameNewModel = () => {
  robot.moveMouse(centre,newName);
  robot.mouseClick('left');
  robot.typeString(settings.name);
  setTimeout(function() {
    robot.moveMouse(centre,newDesc);
    robot.mouseClick('left');
    robot.typeString(settings.description);
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
    robot.typeString(settings.training);
    robot.keyTap('enter');
  },1500);

  setTimeout(function() {
    robot.moveMouse(importx,fourth);
    robot.mouseClick('left');
  },2500);

  setTimeout(function() {
    robot.moveMouse(importFinishx,importFinishy);
    robot.mouseClick('left');
  },3000);
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
    robot.typeString(settings.validation);
    robot.keyTap('enter');
  },1500);

  setTimeout(function() {
    robot.moveMouse(importx,fourth);
    robot.mouseClick('left');
  },2500);

  setTimeout(function() {
    robot.moveMouse(importFinishx,importFinishy);
    robot.mouseClick('left');
  },3000);

  setTimeout(function() {
    robot.moveMouse(nextx,nexty);
    robot.mouseClick('left');
  },4000);
};

// Configure setup fields
const setup = (fieldNum, desiredProperty) => {
  robot.moveMouse(inputProperty,fieldNum);
  robot.mouseClick('left');
  robot.moveMouse((inputProperty - 30),fieldNum);
  robot.mouseClick('left');
  robot.moveMouse(inputProperty,fieldNum);
  robot.mouseClick('left');
  switch (desiredProperty) {
    case 'key':
      robot.moveMouse(inputProperty,(fieldNum + 30));
      robot.mouseClick('left');
      break;
    case 'exclude':
      robot.moveMouse(inputProperty,(fieldNum + 60));
      robot.mouseClick('left');
      break;
    case 'target':
      robot.moveMouse(inputProperty,(fieldNum + 90));
      robot.mouseClick('left');
      break;
    case 'predictor':
      robot.moveMouse(inputProperty,(fieldNum + 120));
      robot.mouseClick('left');
      break;
    case 'weight':
      robot.moveMouse(inputProperty,(fieldNum + 150));
      robot.mouseClick('left');
      break;
    case 'characterKey':
      robot.moveMouse(inputProperty,(fieldNum + 30));
      robot.mouseClick('left');
      break;
    case 'characterExclude':
      robot.moveMouse(inputProperty,(fieldNum + 60));
      robot.mouseClick('left');
      break;
    case 'factorKey':
      robot.moveMouse(inputProperty,(fieldNum + 30));
      robot.mouseClick('left');
      break;
    case 'factorExclude':
      robot.moveMouse(inputProperty,(fieldNum + 60));
      robot.mouseClick('left');
      break;
    case 'factorPredictor':
      robot.moveMouse(inputProperty,(fieldNum + 90));
      robot.mouseClick('left');
      break;
  }
};

// Run upload functions and move to setup screen
// openDmway();
selectDmway();
// setTimeout(openModel,500);
// setTimeout(nameNewModel,2000)
// setTimeout(setManualUpload,3000);
// setTimeout(trainingUpload,5000);
// setTimeout(validationUpload,9000);
setTimeout(function() {
  for (i=0; i<setupSettingsArray.length; i++) {
    setup(setupSettingsArray[i][0],setupSettingsArray[i][1])
  }
},500)
// setTimeout(setup,1000);
