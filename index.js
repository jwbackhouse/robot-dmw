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

// Define run times (ms)
gapSelectDmway = 1000;
gapOpenDmway = 30000;
gapOpenModel = 2000;
gapNameNewModel = 2000;
gapTrainingUpload = 2000;
gapValidationUpload = 2000;
gapSetup = 500;
gapSetAdvanced = 2000;
gapAnalysisMethod = 5000;
gapRunningModel = 70000;
gapNavScoring = 1000;
gapUploadScoring = 2000;
gapRunScoring = 5000;
gapOpenDest = 7000;
gapPasteData = 9000;
gapNavigateSetup = 1000;


// HELPER FUNCTIONS
// Select file in popup window
async function popupUpload(fileString) {
  robot.moveMouse(importPopupx,importPopupy);
  robot.mouseClick('left');
  robot.typeString(fileString);
  robot.keyTap('enter');
  await timer(500);
  robot.moveMouse(importFinishx,importFinishy);
  robot.mouseClick('left');
  console.log('File uploaded.')
}

// Click next
async function clickNext() {
  robot.moveMouse(nextx,nexty);
  robot.mouseClick('left');
  await timer(500);
  console.log('Next clicked.')
}

// Timer function for iteration loop
function timer(ms) {
  return new Promise(res => setTimeout(res, ms));
}


// PRIMARY FUNCTIONS
// Select DMway when already open
async function selectDmway() {
  robot.moveMouse(5,180);
  robot.mouseClick('left');
  await timer(gapSelectDmway);
};

// Open DMway
async function openDmway() {
  robot.moveMouse(5,180);
  robot.mouseClick('left');
  await timer (gapOpenDmway);
  robot.moveMouse(maximise,20);
  robot.mouseClick('left');
  await timer(1000);
  console.log('DMway opened.')
};

// Open model
async function openModel() {
  robot.moveMouse(projects, masterSettings.settings.project);
  robot.scrollMouse(0,5000);
  robot.mouseClick('left');
  robot.moveMouse(modelx, masterSettings.settings.model);
  robot.scrollMouse(0,5000);
  robot.mouseClick('left','double');
  await timer(gapOpenModel);
  console.log('Model opened.')
};

// Name new model
async function nameNewModel() {
  robot.moveMouse(centre,newName);
  robot.mouseClick('left');
  robot.typeString(masterSettings.settings.name);
  robot.moveMouse(centre,newDesc);
  robot.mouseClick('left');
  robot.typeString(masterSettings.settings.description);
  robot.moveMouse(centre,newAccept);
  robot.mouseClick('left');
  await timer(gapNameNewModel);
  console.log('New model named.')
};

// Choose manual splitting
async function manualSplit() {
  robot.moveMouse(manualx,manualy);
  robot.mouseClick('left');
  robot.keyTap('down');
  robot.keyTap('enter');
  await timer(500);
};

// Upload training file
async function trainingUpload() {
  robot.moveMouse(importx,importTraining);
  robot.mouseClick('left');
  robot.keyTap('down');
  robot.keyTap('down');
  robot.keyTap('enter');
  await timer(500);
  popupUpload(masterSettings.settings.training);
  await timer(gapTrainingUpload);
  console.log('Training file uploaded.');
};

// Upload validation file + click next
async function validationUpload() {
  robot.moveMouse(importx,importValidation);
  robot.mouseClick('left');
  robot.keyTap('down');
  robot.keyTap('down');
  robot.keyTap('enter');
  await timer(500);
  popupUpload(masterSettings.settings.validation)
  await timer(gapValidationUpload)
  clickNext();
  console.log('Validation file uploaded.')
};

// Configure setup fields
async function setup(fieldNum, desiredProperty) {
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
  };
  await timer(gapSetup);
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
};

// Exit advanced settings
async function exitAdvanced() {
  robot.moveMouse(backx, backy);
  robot.mouseClick('left');
  console.log('Analysis method changed.');
  await timer(1000);
};

// Navigate to Scoring > Score data page
async function navScoring() {
  robot.moveMouse(110,205);
  robot.mouseClick('left');
  await timer(500);
  robot.moveMouse(440,190);
  robot.mouseClick('left');
};

// Upload scoring file
async function uploadScoring() {
  robot.moveMouse(625,360);
  robot.mouseClick('left');
  robot.keyTap('down');
  robot.keyTap('down');
  robot.keyTap('enter');
  await timer(500);
  popupUpload(masterSettings.settings.validation);
  await timer(gapUploadScoring);
}

// Run scoring and copy results
async function runScoring() {
  // Select score with predictors and press 'go'
  robot.moveMouse(515,400);
  robot.mouseClick('left');
  robot.moveMouse(390,440);
  robot.mouseClick('left')

  // Highlight first two columns
  await timer(2000);
  robot.moveMouse(230,520);
  robot.mouseClick('left');
  robot.scrollMouse(0,-10000);
  robot.moveMouse(290,650);
  robot.keyToggle('shift','down');
  robot.mouseClick('left');
  robot.keyToggle('shift','up');

  // Copy data
  await timer(1000);
  robot.mouseClick('right');
  robot.moveMouse(310,670);
  robot.mouseClick('left');
  await timer(500);
  console.log('Scoring run.')
};

// Open destination file for scoring data
async function openDest() {
  robot.moveMouse(30,75)
  robot.mouseClick('left');
  await timer(1000);
  robot.moveMouse(185,155);
  robot.mouseClick('left');
  robot.typeString(masterSettings.settings.destination);
  robot.keyTap('enter');
  await timer(gapOpenDest);
};

async function selectDest() {
  robot.moveMouse(30,140);
  robot.mouseClick('left');
  await timer(gapSelectDmway);
};

// Paste scoring data into destination file
async function pasteData(modelId) {
  // Jump to raw data sheet
  robot.keyTap('g','control');
  robot.typeString(masterSettings.settings.fcstCompSheet);
  robot.keyTap('enter');
  await timer(500);

  // Move to next empty cell and paste data
  robot.keyTap('right','control');
  robot.keyTap('right');
  robot.keyTap('v','control');
  await timer(500);

  // Enter model name
  robot.keyTap('up');
  robot.typeString(modelId);
  robot.keyTap('enter');
  console.log('Score pasted into destination file.')
};

// Navigate from scoring to setup package
async function navigateSetup() {
  robot.moveMouse(buildx,buildy);
  robot.mouseClick('left');
  robot.moveMouse(setupx,setupButtonsy);
  robot.mouseClick('left');
  await timer(500);
  console.log('Navigated back to setup.')
};

// AGGREGATE FUNCTIONS
async function firstSetupLoop() {
  try {
    await exitAdvanced();
    // await timer(2000);
    await clickNext();
    await timer(gapRunningModel);
    await navScoring();
    // await timer(gapNavScoring);
    await uploadScoring();
    // await timer(gapUploadScoring);
    await runScoring();
    // await timer(gapRunScoring);
    await openDest();
    // await timer(gapOpenDest);
    await pasteData(masterSettings.setupSuite[0][0]);
    // await timer(gapPasteData);
    await selectDmway()
    // await timer(gapSelectDmway);
    await navigateSetup();
    // await timer(gapNavigateSetup)
    console.log('First loop complete');
  }
  catch(err) {
    console.log(err)
  }
}

async function laterSetupLoop(setupNum) {
  try {
    await exitAdvanced();
    // await timer(2000);
    await clickNext();
    await timer(gapRunningModel);
    await navScoring();
    // await timer(gapNavScoring);
    await runScoring();
    // await timer(gapRunScoring);
    await selectDest()
    // await timer(gapSelectDmway);
    await pasteData(masterSettings.setupSuite[setupNum][0]);
    // await timer(gapPasteData);
    await selectDmway()
    // await timer(gapSelectDmway);
    await navigateSetup();
    // await timer(gapNavigateSetup)
    console.log('Loop complete: ', setupNum);
  }
  catch(err) {
    console.log(err)
  }
}

async function firstSetup() {
  for (j=2; j<10; j++) {
    await setup(masterSettings.setupSuite[0][j][0],masterSettings.setupSuite[0][j][1]);
  }
  robot.scrollMouse(0,-400);
  console.log('Scrolled down.')
  await timer(1000);
  for (k=10; k<masterSettings.setupSuite[0].length; k++) {
    await setup(masterSettings.setupSuite[0][k][0],masterSettings.setupSuite[0][k][1]);
  }
  if (masterSettings.setupSuite[0][1][0] === 'changeMethod') {
    // await timer(gapSetup);
    await setupAdvanced();
    // await timer(gapSetAdvanced);
    await analysisMethod();
    // await timer(gapAnalysisMethod);
    await firstSetupLoop();
  } else {
    // await timer(gapSetup);
    await setupAdvanced();
    // await timer(gapSetAdvanced);
    await firstSetupLoop();
  }
};

async function subsequentSetups () {
  for (i=1; i<masterSettings.setupSuite.length; i++) {
    for (l=2; l<10; l++) {
      setup(masterSettings.setupSuite[i][l][0],masterSettings.setupSuite[i][l][1]);
    }
    await timer(1000);
    robot.scrollMouse(0,-400);
    for (m=10; m<masterSettings.setupSuite[i].length; m++) {
      setup(masterSettings.setupSuite[i][m][0],masterSettings.setupSuite[i][m][1]);
    }
    if (masterSettings.setupSuite[i][1][0] === 'changeMethod') {
      // await timer(gapSetup);
      await setupAdvanced();
      // await timer(gapSetAdvanced);
      await analysisMethod();
      // await timer(gapAnalysisMethod);
      await laterSetupLoop(i);
    } else {
      // await timer(gapSetup);
      await setupAdvanced();
      // await timer(gapSetAdvanced);
      await laterSetupLoop(i);
    }
  }
  console.log('Complete.');
};

async function uploadAndRun() {
  await trainingUpload();
  // await timer(gapTrainingUpload);
  await validationUpload();
  // await timer(gapValidationUpload);
  await firstSetup();
  // await timer(gapSetup + gapSetAdvanced + gapAnalysisMethod + gapRunningModel + gapNavScoring + gapUploadScoring + gapRunScoring + gapOpenDest + gapPasteData + gapSelectDmway + gapNavigateSetup + 5000);
  await subsequentSetups();
}

async function runExistingModel() {
  await selectDmway();
  // await timer(gapSelectDmway);
  await openModel();
  // await timer(gapOpenModel);
  await manualSplit();
  // await timer(750);
  await uploadAndRun();
}

async function runNewmodel() {
  await selectDmway();
  // await timer(gapSelectDmway);
  await openModel();
  // await timer(gapOpenModel);
  await nameNewModel();
  // await timer (gapNameNewModel);
  await manualSplit();
  // await timer(500);
  await uploadAndRun();
}

// OPEN DMway
// openDmway();

// RUN IF STARTING FROM SCRATCH -
// if (masterSettings.settings.model === 160) {
//   runNewmodel();
// } else {
//   runExistingModel();
// };

// UPLOAD TRAINING & VALIDATION FILES AND RUN SETUPS - start on build screen
// selectDmway();
// setTimeout(uploadAndRun,500);

// RUN SETUP LOOPS - start on setup screen
async function runSetupLoops() {
  await selectDmway();
  await firstSetup();
  await subsequentSetups();
};
runSetupLoops();
