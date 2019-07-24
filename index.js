// Require packages
const robot = require('robotjs');

// Reduce mouse & keyboard delay
robot.setMouseDelay(2);
robot.setKeyboardDelay(2);

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
const buildx = 120;
const setupx = 495;
const advancedx = 770;
const featuresx = 570;
const optimizationx = 470;
const backx = 235

// Set y variables for homescreen
const newModel = 160
const first = 225;
const second = 250;
const third = 275;
const fourth = 300;
const fifth = 325;
const sixth = 350;
const seventh = 375;
const eighth = 400;
const ninth = 425;

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
two = 350;
three = 375;
four = 400;
five = 425;
six = 450;
seven = 475;
eight = 500;
nine = 525;
ten = 550;
eleven = 575;
twelve = 600;
thirteen = 625;

// Set other y variables
const buildy = 125;
const setupButtonsy = 195;
const featuresy = 185;
const optimizationy = 350;
const backy = 95

// Define run times for each component (ms)
gapSetup = 4000;
gapAnalysisMethod = 3000;
gapRunningModel = 60000;
gapScoring = 11000;
gapPasteData = 9000;
gapSelectDmway = 1000;
gapNavigateSetup = 1000;


// Define settings
let settings = {
  project:second,
  model:newModel,
  name:"Test 3",
  description:"Third test",
  training:"C:\\Users\\jwbackhouse\\Google Drive\\Skarp\\DMway models\\Model files 14d\\birmingham\\birmingham(14)(30Jun) 1 T.csv",
  validation:"C:\\Users\\jwbackhouse\\Google Drive\\Skarp\\DMway models\\Model files 14d\\birmingham\\birmingham(14)(30Jun) 1 V.csv",
  destination:"C:\\Users\\jwbackhouse\\Google Drive\\Skarp\\DMway models\\Forecast comparisons\\test.xlsx",
  fcstCompSheet:"'raw 14d'!A2"
};

const setupOne = [
  ["1.1AIC"],
  [],
  [one,"characterKey"],
  [four,"exclude"],
  [five,"target"],
  [six,"exclude"],
  [seven,"exclude"],
  [eight, "exclude"],
  [nine,"exclude"]
]

const setupTwo = [
  ["1.2AIC"],
  ["changeMethod"],
  [one,"characterKey"],
  [four,"exclude"],
  [five,"exclude"],
  [six,"target"],
  [seven,"exclude"],
  [eight, "exclude"],
  [nine,"exclude"],
  [ten,"exclude"]
]

const setupSuite = [
  setupOne,
  setupTwo
];


// HELPER FUNCTIONS
// Select file in popup window
const popupUpload = (fileString) => {
  robot.moveMouse(importPopupx,importPopupy);
  robot.mouseClick('left');
  robot.typeString(fileString);
  robot.keyTap('enter');
  setTimeout(function() {
    robot.moveMouse(importFinishx,importFinishy);
    robot.mouseClick('left');
  },500);
  console.log('File uploaded.')
}

// Click next
const clickNext = () => {
  robot.moveMouse(nextx,nexty);
  robot.mouseClick('left');
  console.log('Next clicked.')
}

// Timer function for iteration loop
function timer(ms) {
  return new Promise(res => setTimeout(res, ms));
}

const gapArray= [gapSetup,gapAnalysisMethod,gapRunningModel,gapScoring,gapPasteData,gapSelectDmway,gapNavigateSetup];
const timingArray = [];
gapArray.reduce(function(a,b,i) {
  return timingArray[i] = a+b;
},0);

// Iteration loop for setup
async function setupLoop () {
  for (i=0; i<setupSuite.length; i++) {
    for (j=2; j<setupSuite[i].length; j++) {
      setup(setupSuite[i][j][0],setupSuite[i][j][1]);
    }
    if (setupSuite[i][1] === 'changeMethod') {
      setTimeout(analysisMethod,timingArray[0])
      setTimeout(clickNext,timingArray[1]);
      setTimeout(runScoring,timingArray[2]);
      setTimeout(() => {
        pasteData(setupSuite[i][0])
      },timingArray[3]);
      setTimeout(selectDmway,timingArray[4]);
      setTimeout(navigateSetup,timingArray[5]);
      await timer(timingArray[6]);
      console.log('Loop: ',i);
    } else {
      setTimeout(clickNext,timingArray[1]);
      setTimeout(runScoring,timingArray[2]);
      setTimeout(() => {
        pasteData(setupSuite[i][0])
      },timingArray[3]);
      setTimeout(selectDmway,timingArray[4]);
      setTimeout(navigateSetup,timingArray[5]);
      await timer(timingArray[6]);
      console.log('Loop complete: ',i);
    }
  }
  console.log('Complete.');
}


// PRIMARY FUNCTIONS
// Select DMway when already open
const selectDmway = () => {
  robot.moveMouse(5,180);
  robot.mouseClick('left');
};

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
  robot.moveMouse(projects, settings.project);
  robot.scrollMouse(0,5000);
  robot.mouseClick('left');
  robot.moveMouse(modelx, settings.model);
  robot.scrollMouse(0,5000);
  robot.mouseClick('left','double');
};

// Name new model & choose manual setting
const nameNewModel = () => {
  robot.moveMouse(centre,newName);
  robot.mouseClick('left');
  robot.typeString(settings.name);
  robot.moveMouse(centre,newDesc);
  robot.mouseClick('left');
  robot.typeString(settings.description);
  robot.moveMouse(centre,newAccept);
  robot.mouseClick('left');
  setTimeout(function() {
    robot.moveMouse(manualx,manualy);
    robot.mouseClick('left');
    robot.keyTap('down');
    robot.keyTap('enter');
  },1000);
};

// Upload training file
const trainingUpload = () => {
  robot.moveMouse(importx,importTraining);
  robot.mouseClick('left');
  robot.keyTap('down');
  robot.keyTap('down');
  robot.keyTap('enter');
  setTimeout(function() {
    popupUpload(settings.training)
  },500);
};

// Upload validation file + click next
const validationUpload = () => {
  robot.moveMouse(importx,importValidation);
  robot.mouseClick('left');
  robot.keyTap('down');
  robot.keyTap('down');
  robot.keyTap('enter');
  setTimeout(function() {
    popupUpload(settings.validation)
  },500);

  setTimeout(clickNext,3000);
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
  console.log('Setup complete.');
};

// Alternate analysis method (AIC / BIC)
const analysisMethod = () => {
  robot.moveMouse(advancedx, setupButtonsy);
  robot.mouseClick('left');
  setTimeout(() => {
    robot.moveMouse(featuresx, featuresy);
    robot.mouseClick('left');
  },1000);
  setTimeout(() => {
    robot.moveMouse(optimizationx,optimizationy);
    robot.mouseClick('left');
    robot.keyTap('up');
    robot.keyTap('up');
    robot.keyTap('enter');
  },2000);
  setTimeout(() => {
    robot.moveMouse(backx, backy);
    robot.mouseClick('left');
  },3000);
  console.log('Analysis method changed.')
}

// Score validation file
const runScoring = () => {
  // Navigate to Scoring > Score data page
  robot.moveMouse(110,205);
  robot.mouseClick('left');
  setTimeout(() => {
    robot.moveMouse(440,190);
    robot.mouseClick('left');
  },500);

  // Upload scoring file
  setTimeout(function() {
    robot.moveMouse(625,360);
    robot.mouseClick('left');
    robot.keyTap('down');
    robot.keyTap('down');
    robot.keyTap('enter');
    setTimeout(function() {
      popupUpload(settings.validation);
    },500);
  },1000);

  // Select score with predictors and press 'go'
  setTimeout(function() {
    robot.moveMouse(515,400);
    robot.mouseClick('left');
    robot.moveMouse(390,440);
    robot.mouseClick('left')
  },6000);

  // Highlight first two columns
  setTimeout(function() {
    robot.moveMouse(230,520);
    robot.mouseClick('left');
    robot.scrollMouse(0,-10000);
    robot.moveMouse(290,650);
    robot.keyToggle('shift','down');
    robot.mouseClick('left');
    robot.keyToggle('shift','up');
  },9000);

  // Copy data
  setTimeout(function() {
    robot.mouseClick('right');
    robot.moveMouse(310,670);
    robot.mouseClick('left');
  },10000);
  console.log('Scoring run.')
};

// Paste data into destination files
const pasteData = (modelId) => {
  // Open destination file
  robot.moveMouse(30,75)
  robot.mouseClick('left');
  setTimeout(() => {
    robot.moveMouse(185,155);
    robot.mouseClick('left');
    robot.typeString(settings.destination);
    robot.keyTap('enter');
  },1000);

  // Navigate to next empty cell in destination sheet and paste data
  setTimeout(function() {
    robot.keyTap('g','control');
    robot.typeString(settings.fcstCompSheet);
    robot.keyTap('enter');
  },7000);

  setTimeout(() => {
    robot.keyTap('right','control');
    robot.keyTap('right');
    robot.keyTap('v','control');
    robot.keyTap('up');
    robot.typeString(modelId);
    robot.keyTap('enter');
  },7500);
  console.log('Score pasted into destination file.')
}

// Navigate from scoring to setup package
const navigateSetup = () => {
  robot.moveMouse(buildx,buildy);
  robot.mouseClick('left');
  robot.moveMouse(setupx,setupButtonsy);
  robot.mouseClick('left');
  console.log('Navigated back to setup.')
}

// FUNCTIONS TO RUN
// Run upload functions and move to setup screen
selectDmway();
// openDmway();
// setTimeout(openModel,500);
// setTimeout(nameNewModel,2000)
// setTimeout(trainingUpload,4000);
// setTimeout(validationUpload,7000);
setTimeout(setupLoop,500); // Was 14k

// TESTING
// setTimeout(analysisMethod,500);
// setTimeout(pasteData,500);
// setTimeout(runScoring,500);
// console.log(gapArray);
// console.log(timingArray)
