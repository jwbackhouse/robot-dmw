// Require packages
const robot = require('robotjs');
const masterSettings = require('./settings.js');

// Reduce mouse & keyboard delay
robot.setMouseDelay(2);
robot.setKeyboardDelay(2);

// Set x coordinates
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
const univariatex = 420;
const featuresx = 570;
const optimizationx = 470;
const missingx = 545;
const backx = 235

// Set y coordinates for new model popup
const newName = 250;
const newDesc = 280;
const newAccept = 340;

// Set y coordinates for model load screen
const manualy = 300;
const importTraining = 420;
const importValidation = 560;
const importPopupy = 530;
const importFinishy = 490;
const nexty = 200;

// Set other y coordinates
const buildy = 125;
const setupButtonsy = 195;
const featuresy = 185;
const optimizationy = 350;
const missingy = 420;
const backy = 95;

// Define run times for each setupLoop component (ms)
gapSetup = 6000;
gapSetAdvanced = 2000;
gapAnalysisMethod = 5000;
gapRunningModel = 70000;
gapScoring = 11000;
gapNavScoring = 1000;
gapUploadScoring = 2000;
gapRunScoring = 5000;
gapOpenDest = 7000;
gapPasteData = 9000;
gapSelectDmway = 1000;
gapNavigateSetup = 1000;

// Define run times for other main functions (ms)
gapOpenDmway = 13000;
gapOpenModel = 2000;
gapNameNewModel = 3000;
gapTrainingUpload = 3000;
gapValidationUpload = 6000;


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


// PRIMARY FUNCTIONS
// Select DMway when already open
const selectDmway = () => {
  robot.moveMouse(5,180);
  robot.mouseClick('left');
};

// Open DMway
async function openDmway () {
  robot.moveMouse(5,180);
  robot.mouseClick('left');
  setTimeout(function() {
    robot.moveMouse(maximise,20);
    robot.mouseClick('left');
  },12000)
  await timer (gapOpenDmway);
  console.log('DMway opened.')
};

// Open model
const openModel = () => {
  robot.moveMouse(projects, masterSettings.settings.project);
  robot.scrollMouse(0,5000);
  robot.mouseClick('left');
  robot.moveMouse(modelx, masterSettings.settings.model);
  robot.scrollMouse(0,5000);
  robot.mouseClick('left','double');
  console.log('Model opened.')
};

// Name new model
const nameNewModel = () => {
  robot.moveMouse(centre,newName);
  robot.mouseClick('left');
  robot.typeString(masterSettings.settings.name);
  robot.moveMouse(centre,newDesc);
  robot.mouseClick('left');
  robot.typeString(masterSettings.settings.description);
  robot.moveMouse(centre,newAccept);
  robot.mouseClick('left');
  console.log('New model named.')
};

// Choose manual splitting
const manualSplit = () => {
  robot.moveMouse(manualx,manualy);
  robot.mouseClick('left');
  robot.keyTap('down');
  robot.keyTap('enter');
}

// Upload training file
const trainingUpload = () => {
  robot.moveMouse(importx,importTraining);
  robot.mouseClick('left');
  robot.keyTap('down');
  robot.keyTap('down');
  robot.keyTap('enter');
  setTimeout(function() {
    popupUpload(masterSettings.settings.training)
  },500);
  console.log('Training file uploaded.')
};

// Upload validation file + click next
const validationUpload = () => {
  robot.moveMouse(importx,importValidation);
  robot.mouseClick('left');
  robot.keyTap('down');
  robot.keyTap('down');
  robot.keyTap('enter');
  setTimeout(function() {
    popupUpload(masterSettings.settings.validation)
  },500);
  setTimeout(clickNext,3000);
  console.log('Validation file uploaded.')
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

// Set max proportion of missing values
async function setupAdvanced() {
  robot.moveMouse(advancedx, setupButtonsy);
  robot.mouseClick('left');
  await timer(500);
  robot.moveMouse(univariatex, featuresy);
  robot.mouseClick('left');
  await timer(500);
  robot.moveMouse(missingx,missingy);
  robot.mouseClick('left','double');
  await timer(250);
  robot.typeString('0.001');
};

// Alternate analysis method (AIC / BIC)
async function analysisMethod() {
  robot.moveMouse(featuresx, featuresy);
  robot.mouseClick('left');
  await timer (500);
  robot.moveMouse(optimizationx,optimizationy);
  robot.mouseClick('left');
  robot.keyTap('up');
  robot.keyTap('up');
  robot.keyTap('enter');
  console.log('Method selected.')
}

// Exit advanced settings
async function exitAdvanced() {
  robot.moveMouse(backx, backy);
  robot.mouseClick('left');
  console.log('Analysis method changed.')
}

// Navigate to Scoring > Score data page
const navScoring = () => {
  robot.moveMouse(110,205);
  robot.mouseClick('left');
  setTimeout(() => {
    robot.moveMouse(440,190);
    robot.mouseClick('left');
  },500);
}

// Upload scoring file
const uploadScoring = () => {
  setTimeout(function() {
    robot.moveMouse(625,360);
    robot.mouseClick('left');
    robot.keyTap('down');
    robot.keyTap('down');
    robot.keyTap('enter');
    setTimeout(function() {
      popupUpload(masterSettings.settings.validation);
    },500);
  },1000);
}

// Run scoring and copy results
const runScoring = () => {
  // Select score with predictors and press 'go'
  robot.moveMouse(515,400);
  robot.mouseClick('left');
  robot.moveMouse(390,440);
  robot.mouseClick('left')

  // Highlight first two columns
  setTimeout(function() {
    robot.moveMouse(230,520);
    robot.mouseClick('left');
    robot.scrollMouse(0,-10000);
    robot.moveMouse(290,650);
    robot.keyToggle('shift','down');
    robot.mouseClick('left');
    robot.keyToggle('shift','up');
  },3000);

  // Copy data
  setTimeout(function() {
    robot.mouseClick('right');
    robot.moveMouse(310,670);
    robot.mouseClick('left');
  },4000);
  console.log('Scoring run.')
};

// Open destination file for scoring data
const openDest = () => {
  robot.moveMouse(30,75)
  robot.mouseClick('left');
  setTimeout(() => {
    robot.moveMouse(185,155);
    robot.mouseClick('left');
    robot.typeString(masterSettings.settings.destination);
    robot.keyTap('enter');
  },1000);
};

const selectDest = () => {
  robot.moveMouse(30,140);
  robot.mouseClick('left');
}

// Paste scoring data into destination file
const pasteData = (modelId) => {
  setTimeout(function() {
    robot.keyTap('g','control');
    robot.typeString(masterSettings.settings.fcstCompSheet);
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
};

// Navigate from scoring to setup package
const navigateSetup = () => {
  robot.moveMouse(buildx,buildy);
  robot.mouseClick('left');
  robot.moveMouse(setupx,setupButtonsy);
  robot.mouseClick('left');
  console.log('Navigated back to setup.')
}

// AGGREGATE FUNCTIONS
async function firstSetupLoop() {
  try {
    exitAdvanced();
    await timer(2000);
    clickNext();
    await timer(gapRunningModel);
    navScoring();
    await timer(gapNavScoring);
    uploadScoring();
    await timer(gapUploadScoring);
    runScoring();
    await timer(gapRunScoring);
    openDest();
    await timer(gapOpenDest);
    pasteData(masterSettings.setupSuite[0][0]);
    await timer(gapPasteData);
    selectDmway()
    await timer(gapSelectDmway);
    navigateSetup();
    await timer(gapNavigateSetup)
    console.log('Loop complete: 0');
  }
  catch(err) {
    console.log(err)
  }
}

async function laterSetupLoop(setupNum) {
  try {
    exitAdvanced();
    await timer(2000);
    clickNext();
    await timer(gapRunningModel);
    navScoring();
    await timer(gapNavScoring);
    runScoring();
    await timer(gapRunScoring);
    selectDest()
    await timer(gapSelectDmway);
    pasteData(masterSettings.setupSuite[setupNum][0]);
    await timer(gapPasteData);
    selectDmway()
    await timer(gapSelectDmway);
    navigateSetup();
    await timer(gapNavigateSetup)
    console.log('Loop complete: ', setupNum);
  }
  catch(err) {
    console.log(err)
  }
}

async function uploadAndRun() {
  trainingUpload();
  await timer(gapTrainingUpload);
  validationUpload();
  await timer(gapValidationUpload);
  firstSetup();
  await timer(gapSetup + gapSetAdvanced + gapAnalysisMethod + gapRunningModel + gapNavScoring + gapUploadScoring + gapRunScoring + gapOpenDest + gapPasteData + gapSelectDmway + gapNavigateSetup + 5000);
  subsequentSetups();
}

async function runExistingModel() {
  selectDmway();
  await timer(gapSelectDmway);
  openModel();
  await timer(gapOpenModel);
  manualSplit();
  await timer(750);
  uploadAndRun();
}

async function runNewmodel() {
  selectDmway();
  await timer(gapSelectDmway);
  openModel();
  await timer(gapOpenModel);
  nameNewModel();
  await timer (gapNameNewModel);
  manualSplit();
  await timer(500);
  uploadAndRun();
}

async function firstSetup() {
  for (j=2; j<10; j++) {
    setup(masterSettings.setupSuite[0][j][0],masterSettings.setupSuite[0][j][1]);
  }
  robot.scrollMouse(0,-400);
  console.log('Scrolled down.')
  await timer(1000);
  for (k=10; k<masterSettings.setupSuite[0].length; k++) {
    setup(masterSettings.setupSuite[0][k][0],masterSettings.setupSuite[0][k][1]);
  }
  if (masterSettings.setupSuite[0][1][0] === 'changeMethod') {
    await timer(gapSetup);
    setupAdvanced();
    await timer(gapSetAdvanced);
    analysisMethod();
    await timer(gapAnalysisMethod);
    firstSetupLoop();
  } else {
    await timer(gapSetup);
    setupAdvanced();
    await timer(gapSetAdvanced);
    firstSetupLoop();
  }
};

async function subsequentSetups () {
  for (i=1; i<masterSettings.setupSuite.length; i++) {
    for (j=2; j<10; j++) {
      setup(masterSettings.setupSuite[i][j][0],masterSettings.setupSuite[i][j][1]);
    }
    await timer(1000);
    robot.scrollMouse(0,-400);
    for (k=10; k<masterSettings.setupSuite[i].length; k++) {
      setup(masterSettings.setupSuite[i][k][0],masterSettings.setupSuite[i][k][1]);
    }
    if (masterSettings.setupSuite[i][1][0] === 'changeMethod') {
      await timer(gapSetup);
      setupAdvanced();
      await timer(gapSetAdvanced);
      analysisMethod();
      await timer(gapAnalysisMethod);
      laterSetupLoop(i);
    } else {
      await timer(gapSetup);
      setupAdvanced();
      await timer(gapSetAdvanced);
      laterSetupLoop(i);
    }
  }
  console.log('Complete.');
};

// RUN IF STARTING FROM SCRATCH
// if (masterSettings.settings.model === 160) {
//   runNewmodel();
// } else {
//   runExistingModel();
// };

// RUN IF JUST DOING SETUP LOOPS
selectDmway();
setTimeout(uploadAndRun,500);

// selectDmway();
// analysisMethod();
