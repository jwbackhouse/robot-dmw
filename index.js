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
const gapSelectDmway = 1000;
const gapOpenDmway = 30000;
gapOpenModel = 2000;
gapNameNewModel = 2000;
gapTrainingUpload = 1500;
gapValidationUpload = 3000;
gapSetup = 500;
gapAfterSetup = 4000;
gapSetAdvanced = 1000;
gapExitAdvanced = 4000;
gapRunningModel = masterSettings.settings.runTime;
gapNavScoring = 1000;
gapUploadScoring = 3000;
gapRunScoring = 9000;
const gapOpenDest = 3000;
gapClickNext = 2000;


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
  await timer (gapClickNext);
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
  await clickNext();
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
    case 'LFL_exclude':
      robot.moveMouse(inputProperty,600);
      robot.mouseClick('left');
      break;
    case 'target':
      robot.moveMouse(inputProperty,(fieldNum + 90));
      robot.mouseClick('left');
      break;
    case 'LFL_target':
      robot.moveMouse(inputProperty,630);
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

async function openAdvanced() {
  robot.moveMouse(advancedx, setupButtonsy);
  robot.mouseClick('left');
  await timer(1000);
  console.log('Advanced settings opened.');
};

// Set max proportion of missing values
async function setMissing() {
  robot.moveMouse(270,setupButtonsy);
  robot.mouseClick('left');
  await timer(1000);
  robot.keyTap('right');
//   robot.moveMouse(univariatex, featuresy);
//   robot.mouseClick('left');
  await timer(1000);
  robot.moveMouse(missingx,missingy);
  robot.mouseClick('left','double');
  await timer(500);
  robot.typeString('0.001');
  await timer(500);
  console.log('Missing variables set to 0.001.')
};

// Alternate analysis method (AIC / BIC)
async function setAnalysisMethod() {
  robot.moveMouse(270,setupButtonsy);
  robot.mouseClick('left');
  await timer(1000);
  robot.keyTap('right');
  robot.keyTap('right');
  // robot.moveMouse(featuresx, featuresy);
  // robot.mouseClick('left');
  await timer (500);
  robot.moveMouse(optimizationx,optimizationy);
  robot.mouseClick('left');
  await timer (500);
  robot.keyTap('up');
  await timer (500);
  robot.keyTap('up');
  await timer (500);
  robot.keyTap('enter');
  await timer(gapSetAdvanced)
  console.log('Analysis method switched.')
};

// Exit advanced settings
async function exitAdvanced() {
  robot.moveMouse(backx, backy);
  robot.mouseClick('left');
  await timer(gapExitAdvanced);
  console.log('Advanced settings exited.');
};

// Re-set 3sd as target (bug workaround)
async function threeSDReset() {
  if (masterSettings.setupSuite[0][6][1] === 'target') {
    await robot.moveMouse(inputProperty,475);
    await robot.mouseClick('left');
    await robot.moveMouse(inputProperty,535);
    await robot.mouseClick('left');
    await robot.moveMouse(inputProperty,475);
    await robot.mouseClick('left');
    await robot.moveMouse(inputProperty,565);
    await robot.mouseClick('left');
    await timer(gapClickNext)
    console.log('3sd re-set as target.')
  } else {
    await timer(500);
  }
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
  await timer(1500);
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
  await timer(2000);
  robot.mouseClick('right');
  robot.moveMouse(310,670);
  robot.mouseClick('left');
  await timer(1000);
  console.log('Scoring run.')
};

// Open destination file for scoring data
async function openDest() {
  robot.moveMouse(30,75)
  robot.mouseClick('left');
  await timer(1000);
  robot.moveMouse(185,155);
  robot.mouseClick('left');
  await robot.typeString(masterSettings.settings.destination);
  robot.keyTap('enter');
  await timer(gapOpenDest);
};

async function selectDest() {
  robot.moveMouse(30,140);
  robot.mouseClick('left');
  await timer(2000);
};

// Paste scoring data into destination file
async function pasteData(modelId) {
  // Jump to raw data sheet
  robot.keyTap('g','control');
  robot.typeString(masterSettings.settings.fcstCompSheet);
  robot.keyTap('enter');
  await timer(2000);

  // Move to next empty cell and paste data
  robot.keyTap('right','control');
  robot.keyTap('right');
  robot.keyTap('v','control');
  await timer(3000);

  // Enter model name
  robot.keyTap('up');
  robot.typeString(modelId);
  robot.keyTap('enter');
  await timer(2000);
  console.log('Score pasted into destination file.')
};

// Navigate from scoring to setup package
async function navigateSetup() {
  robot.moveMouse(buildx,buildy);
  robot.mouseClick('left');
  await timer(500);
  robot.moveMouse(setupx,setupButtonsy);
  robot.mouseClick('left');
  await timer(500);
  console.log('Navigated back to setup.')
};

// AGGREGATE FUNCTIONS
async function firstSetupLoop() {
  try {
    await clickNext();
    await timer(gapRunningModel+30000);
    await navScoring();
    await uploadScoring();
    await runScoring();
    await openDest();
    await pasteData(masterSettings.setupSuite[0][0]);
    await selectDmway()
    await navigateSetup();
    console.log('First loop complete');
  }
  catch(err) {
    console.log(err)
  }
}

async function laterSetupLoop(setupNum) {
  try {
    await clickNext();
    await timer(gapRunningModel);
    await navScoring();
    await runScoring();
    await selectDest();
    await pasteData(masterSettings.setupSuite[setupNum][0]);
    await selectDmway()
    await navigateSetup();
    console.log('Loop complete: ', setupNum + 1);
  }
  catch(err) {
    console.log(err)
  }
}

async function firstSetup() {
  try {
    for (j=2; j<10; j++) {
      await setup(masterSettings.setupSuite[0][j][0],masterSettings.setupSuite[0][j][1]);
    }
    await timer(500);
    await robot.moveMouse(inputProperty,400);
    await robot.scrollMouse(0,-400);
    console.log('Scrolled down.')
    await timer(500);
    // for (k=10; k<masterSettings.setupSuite[0].length; k++) {
    //   await setup(masterSettings.setupSuite[0][k][0],masterSettings.setupSuite[0][k][1]);
    // }
    await setup(masterSettings.setupSuite[0][10][0],masterSettings.setupSuite[0][10][1])
    // await timer(500);
    await robot.scrollMouse(0,-10000);
    console.log('Scrolled to bottom.')
    await timer(500);
    for (l=11; l<masterSettings.setupSuite[0].length; l++) {
      await setup(masterSettings.setupSuite[0][l][0],masterSettings.setupSuite[0][l][1]);
    }
    await timer(gapAfterSetup);
    await openAdvanced();
    await setMissing();
    if (masterSettings.setupSuite[0][1][0] === 'changeMethod') {
      await setAnalysisMethod();
      await exitAdvanced();
    } else {
      await exitAdvanced();
    }
    if (masterSettings.setupSuite[0][6][1] === 'target') {
      await threeSDReset();
      await firstSetupLoop();
    } else {
      await firstSetupLoop();
    }
  } catch(err) {
    console.log(err)
  }
};

async function subsequentSetups () {
  try {
    for (i=1; i<masterSettings.setupSuite.length; i++) {
      for (l=2; l<10; l++) {
        setup(masterSettings.setupSuite[i][l][0],masterSettings.setupSuite[i][l][1]);
      }
      await timer(500);
      await robot.moveMouse(inputProperty,400);
      await robot.scrollMouse(0,-400);
      console.log('Scrolled down.')
      await timer(500);
      // for (m=10; m<masterSettings.setupSuite[i].length; m++) {
      //   await setup(masterSettings.setupSuite[i][m][0],masterSettings.setupSuite[i][m][1]);
      // }
      await setup(masterSettings.setupSuite[0][10][0],masterSettings.setupSuite[0][10][1])
      await robot.scrollMouse(0,-10000);
      console.log('Scrolled to bottom.')
      await timer(500);
      for (n=11; n<masterSettings.setupSuite[0].length; n++) {
        await setup(masterSettings.setupSuite[0][n][0],masterSettings.setupSuite[0][n][1]);
      }
      await timer(gapAfterSetup);
      if (masterSettings.setupSuite[i][1][0] === 'changeMethod') {
        await openAdvanced();
        await setAnalysisMethod();
        await exitAdvanced();
        // await laterSetupLoop(i);
      } else {
        await robot.moveMouse(inputProperty,400);
        await robot.scrollMouse(0,400);
      };
      if (masterSettings.setupSuite[i][6][1] === 'target') {
        await threeSDReset();
        await laterSetupLoop(i);
      } else {
        await laterSetupLoop(i);
      }
    }
  } catch(err) {
    console.log(err)
  }
  console.log('Goodbye.');
};

async function uploadAndRun() {
  try {
    robot.moveMouse(buildx,buildy);
    robot.mouseClick('left');
    await timer(500);
    await trainingUpload();
    await validationUpload();
    await timer(1000);
    await firstSetup();
    await subsequentSetups();
  } catch(err) {
    console.log(err);
  }
}

async function runExistingModel() {
  try{
    await selectDmway();
    await openModel();
    await uploadAndRun();
  } catch(err) {
    console.log(err)
  }
}

async function runNewmodel() {
  try {
    await selectDmway();
    await openModel();
    await nameNewModel();
    await manualSplit();
    await uploadAndRun();
  } catch(err) {
    console.log(err)
  }
}

async function runSetupLoops() {
  await selectDmway();
  await navigateSetup();
  await firstSetup();
  await subsequentSetups();
};

// FOR TESTING
// async function test() {
//   await selectDmway();
//   await navigateSetup();
//   await robot.moveMouse(inputProperty,400);
//   await robot.scrollMouse(0,-10000);
// };
// test();


// OPEN DMway
// async function openDMW() {
//   await openDmway();
// };

// RUN IF STARTING FROM SCRATCH - start on File screen
// if (masterSettings.settings.model === 160) {runNewmodel();} else {runExistingModel();};

// UPLOAD TRAINING & VALIDATION FILES AND RUN SETUPS - start on Build screen
// selectDmway(); setTimeout(uploadAndRun,500);

// RUN SETUP LOOPS - start anywhere in model
runSetupLoops();
