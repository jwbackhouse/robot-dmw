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

// Set y variables for model setup homescreen
const one = 325;
const two = 350;
const three = 375;
const four = 400;
const five = 425;
const six = 450;
const seven = 475;
const eight = 500;
const nine = 525;
const ten = 550;
const eleven = 575;
const twelve = 600;
const thirteen = 625;

exports.settings = {
  project:sixth, // using 'first' not 'one'
  model:first,
  name:"Test 4",
  description:"Model test",
  training:"C:\\Users\\jwbackhouse\\Google Drive\\Skarp\\DMway models\\Model files 14d\\birmingham\\birmingham(14)(30Jun) 1 T.csv",
  validation:"C:\\Users\\jwbackhouse\\Google Drive\\Skarp\\DMway models\\Model files 14d\\birmingham\\birmingham(14)(30Jun) 1 V.csv",
  destination:"C:\\Users\\jwbackhouse\\Google Drive\\Skarp\\DMway models\\Forecast comparisons\\test.xlsx",
  fcstCompSheet:"'raw 14d'!A2"
};


exports.setupOne = [
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

exports.setupTwo = [
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

// Ensure all setup files are listed here
exports.setupSuite = [
  exports.setupOne,
  exports.setupTwo
];
