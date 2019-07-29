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
  project:second, // using 'first' not 'one'
  model:newModel,
  name:"canary4",
  description:"Added absolute differences as per Ronen. Holdout Mar-Jun19",
  training:"C:\\Users\\jwbackhouse\\Google Drive\\Skarp\\DMway models\\Model files 14d\\canarywharf\\canarywharf(14)(30Jun) 4 T.csv",
  validation:"C:\\Users\\jwbackhouse\\Google Drive\\Skarp\\DMway models\\Model files 14d\\canarywharf\\canarywharf(14)(30Jun) 4 V.csv",
  destination:"C:\\Users\\jwbackhouse\\Google Drive\\Skarp\\DMway models\\Forecast comparisons\\canary wharf comparison 19 06 30.xlsx",
  fcstCompSheet:"'raw 17d'!A2"
};


exports.setupOne = [
  ["4.4BIC"],
  ['changeMethod'], // 'changeMethod'
  [one,"characterKey"], // date
  [four,"exclude"], // raw
  [five,"target"], // 2sd
  [six,"exclude"], // 2.5sd
  [seven,"exclude"], // 3sd
  [eight, "exclude"], // 3.5sd
  [nine,"weight"], // rec2
  [ten, "exclude"], // rec4
  // Screen scrolled down at this point
  [one, "exclude"], // rec6
  [two, "exclude"], // evt25
  [three, "exclude"], // evt50
  [four, "exclude"], // evt25 part
  [five, "exclude"] // evt50 part
]

exports.setupTwo = [
  ["4.7AIC"],
  ['changeMethod'],
  [one,"characterKey"], // date
  [four,"exclude"], // raw
  [five,"target"], // 2sd
  [six,"exclude"], // 2.5sd
  [seven,"exclude"], // 3sd
  [eight, "exclude"], // 3.5sd
  [nine,"exclude"], // rec2
  [ten, "exclude"], // rec4
  // Screen scrolled down at this point
  [one, "weight"], // rec6
  [two, "exclude"], // evt25
  [three, "exclude"], // evt50
  [four, "exclude"], // evt25 part
  [five, "exclude"] // evt50 part
]

exports.setupThree = [
  ["4.8AIC"],
  [],
  [one,"characterKey"], // date
  [four,"exclude"], // raw
  [five,"target"], // 2sd
  [six,"exclude"], // 2.5sd
  [seven,"exclude"], // 3sd
  [eight, "exclude"], // 3.5sd
  [nine,"exclude"], // rec2
  [ten, "exclude"], // rec4
  // Screen scrolled down at this point
  [one, "exclude"], // rec6
  [two, "weight"], // evt25
  [three, "exclude"], // evt50
  [four, "exclude"], // evt25 part
  [five, "exclude"], // evt50 part
]

exports.setupFour = [
  ["4.7AIC"],
  [],
  [one,"characterKey"], // date
  [four,"exclude"], // raw
  [five,"target"], // 2sd
  [six,"exclude"], // 2.5sd
  [seven,"exclude"], // 3sd
  [eight, "exclude"], // 3.5sd
  [nine,"exclude"], // rec2
  [ten, "exclude"], // rec4
  // Screen scrolled down at this point
  [one, "exclude"], // rec6
  [two, "exclude"], // evt25
  [three, "weight"], // evt50
  [four, "exclude"], // evt25 part
  [five, "exclude"], // evt50 part
]
// Ensure all setup files are listed here
exports.setupSuite = [
  exports.setupOne,
  exports.setupTwo,
  exports.setupThree,
  exports.setupFour,
];
