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
const tenth = 450;
const eleventh = 475;
const twelfth = 500;
const thirteenth = 525;
const fourteenth = 550;
const fifteenth = 575;
const sixteenth = 600;
const seventeenth = 625;
const eighteenth = 650;
const nineteenth = 675;
const twentieth = 700;

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
  project: second, // using 'first' not 'one'
  model: newModel,
  name:"cobham live5",
  description:"Holdout 15-28Sep. Added LFL variables",
  training:"C:\\Users\\jwbackhouse\\Google Drive\\Skarp\\DMway models\\Model files 10d\\cobham\\cobham(10)(15Sep) live 1 T.csv",
  validation:"C:\\Users\\jwbackhouse\\Google Drive\\Skarp\\DMway models\\Model files 10d\\cobham\\cobham(10)(15Sep) live 1 V.csv",
  destination:"C:\\Users\\jwbackhouse\\Google Drive\\Skarp\\DMway models\\Forecast comparisons\\cobham comparison2.xlsx",
  fcstCompSheet:"'raw 10d'!A2",
  runTime:60000
};


exports.setupOne = [
  ["live5.1BIC"],
  ["changeMethod"],
  [one,"characterKey"], // date
  [four,"target"], // raw
  [five,"exclude"], // 2sd
  [six,"exclude"], // 2.5sd
  [seven,"exclude"], // 3sd
  [eight, "exclude"], // 3.5sd
  [nine,"exclude"], // rec2
  [ten, "exclude"], // rec4
  // Screen scrolled down at this point
  [one, "exclude"], // rec6
  // [two, "exclude"], // evt25
  // [three, "exclude"], // evt50
  // [four, "exclude"], // evt25 part
  // [five, "exclude"], // evt50 part
  // [six, "predictor"]
  // Screen scrolled to bottom
  [615, "LFL_exclude"], // LFL%
  [640, "LFL_exclude"] // LFL£
]

exports.setupTwo = [
  ["live5.2BIC"],
  [],
  [one,"characterKey"], // date
  [four,"exclude"], // raw
  [five,"target"], // 2sd
  [six,"exclude"], // 2.5sd
  [seven,"exclude"], // 3sd
  [eight, "exclude"], // 3.5sd
  [nine,"exclude"], // rec2
  [ten, "exclude"], // rec4
  // // Screen scrolled down at this point
  [one, "exclude"], // rec6
  // [two, "exclude"], // evt25
  // [three, "exclude"], // evt50
  // [four, "exclude"], // evt25 part
  // [five, "exclude"], // evt50 part
  // [six, "predictor"]
  // Screen scrolled to bottom
  [615, "LFL_exclude"], // LFL%
  [640, "LFL_exclude"] // LFL£
]

exports.setupThree = [
  ["live5.3BIC"],
  [],
  [one,"characterKey"], // date
  [four,"exclude"], // raw
  [five,"exclude"], // 2sd
  [six,"exclude"], // 2.5sd
  [seven,"target"], // 3sd
  [eight, "exclude"], // 3.5sd
  [nine,"exclude"], // rec2
  [ten, "exclude"], // rec4
  // Screen scrolled down at this point
  [one, "exclude"], // rec6
  // [two, "exclude"], // evt25
  // [three, "weight"], // evt50
  // [four, "exclude"], // evt25 part
  // [five, "exclude"], // evt50 part
  // Screen scrolled to bottom
  [615, "LFL_exclude"], // LFL%
  [640, "LFL_exclude"] // LFL£
]

exports.setupFour = [
  ["live5.4BIC"],
  [],
  [one,"characterKey"], // date
  [four,"target"], // raw
  [five,"exclude"], // 2sd
  [six,"exclude"], // 2.5sd
  [seven,"exclude"], // 3sd
  [eight, "exclude"], // 3.5sd
  [nine,"weight"], // rec2
  [ten, "exclude"], // rec4
  // // Screen scrolled down at this point
  [one, "exclude"], // rec6
  // [two, "exclude"], // evt25
  // [three, "predictor"], // evt50
  // [four, "exclude"], // evt25 part
  // [five, "predictor"], // evt50 part
  // [six, "exclude"]
  // Screen scrolled to bottom
  [615, "LFL_exclude"], // LFL%
  [640, "LFL_exclude"] // LFL£
]

exports.setupFive = [
  ["live5.5BIC"],
  [],
  [one,"characterKey"], // date
  [four,"target"], // raw
  [five,"exclude"], // 2sd
  [six,"exclude"], // 2.5sd
  [seven,"exclude"], // 3sd
  [eight, "exclude"], // 3.5sd
  [nine,"exclude"], // rec2
  [ten, "weight"], // rec4
  // // Screen scrolled down at this point
  [one, "exclude"], // rec6
  // [two, "exclude"], // evt25
  // [three, "exclude"], // evt50
  // [four, "exclude"], // evt25 part
  // [five, "exclude"], // evt50 part
  // [six, "exclude"]
  // Screen scrolled to bottom
  [615, "LFL_exclude"], // LFL%
  [640, "LFL_exclude"] // LFL£
];

exports.setupSix = [
  ["live5.6BIC"],
  [],
  [one,"characterKey"], // date
  [four,"exclude"], // raw
  [five,"target"], // 2sd
  [six,"exclude"], // 2.5sd
  [seven,"exclude"], // 3sd
  [eight, "exclude"], // 3.5sd
  [nine,"weight"], // rec2
  [ten, "exclude"], // rec4
  // // Screen scrolled down at this point
  [one, "exclude"], // rec6
  // [two, "exclude"], // evt25
  // [three, "exclude"], // evt50
  // [four, "exclude"], // evt25 part
  // [five, "exclude"], // evt50 part
  // [six, "exclude"]
  // Screen scrolled to bottom
  [615, "LFL_exclude"], // LFL%
  [640, "LFL_exclude"] // LFL£
];

exports.setupSeven = [
  ["live5.7BIC"],
  [], // 'changeMethod'
  [one,"characterKey"], // date
  [four,"exclude"], // raw
  [five,"target"], // 2sd
  [six,"exclude"], // 2.5sd
  [seven,"exclude"], // 3sd
  [eight, "exclude"], // 3.5sd
  [nine,"exclude"], // rec2
  [ten, "weight"], // rec4
  // Screen scrolled down at this point
  [one, "exclude"], // rec6
  // [two, "exclude"], // evt25
  // [three, "exclude"], // evt50
  // [four, "exclude"], // evt25 part
  // [five, "exclude"], // evt50 part
  // [six, "predictor"]
  // Screen scrolled to bottom
  [615, "LFL_exclude"], // LFL%
  [640, "LFL_exclude"] // LFL£
]

exports.setupEight = [
  ["live5.5BIC"],
  [],
  [one,"characterKey"], // date
  [four,"target"], // raw
  [five,"exclude"], // 2sd
  [six,"exclude"], // 2.5sd
  [seven,"exclude"], // 3sd
  [eight, "exclude"], // 3.5sd
  [nine,"exclude"], // rec2
  [ten, "weight"], // rec4
  // // Screen scrolled down at this point
  [one, "exclude"], // rec6
  // [two, "exclude"], // evt25
  // [three, "exclude"], // evt50
  // [four, "exclude"], // evt25 part
  // [five, "exclude"], // evt50 part
  // [six, "predictor"]
]

exports.setupNine = [
  ["live5.6BIC"],
  [],
  [one,"characterKey"], // date
  [four,"target"], // raw
  [five,"exclude"], // 2sd
  [six,"exclude"], // 2.5sd
  [seven,"exclude"], // 3sd
  [eight, "exclude"], // 3.5sd
  [nine,"exclude"], // rec2
  [ten, "exclude"], // rec4
  // Screen scrolled down at this point
  [one, "weight"], // rec6
  // [two, "exclude"], // evt25
  // [three, "weight"], // evt50
  // [four, "exclude"], // evt25 part
  // [five, "exclude"], // evt50 part
  // [six, "exclude"]
]

exports.setupTen = [
  ["live5.4BIC"],
  ["changeMethod"],
  [one,"characterKey"], // date
  [four,"target"], // raw
  [five,"exclude"], // 2sd
  [six,"exclude"], // 2.5sd
  [seven,"exclude"], // 3sd
  [eight, "exclude"], // 3.5sd
  [nine,"weight"], // rec2
  [ten, "exclude"], // rec4
  // // Screen scrolled down at this point
  [one, "exclude"], // rec6
  // [two, "exclude"], // evt25
  // [three, "predictor"], // evt50
  // [four, "exclude"], // evt25 part
  // [five, "predictor"], // evt50 part
  // [six, "exclude"]
]

exports.setupEleven = [
  ["live5.5AIC"],
  [],
  [one,"characterKey"], // date
  [four,"target"], // raw
  [five,"exclude"], // 2sd
  [six,"exclude"], // 2.5sd
  [seven,"exclude"], // 3sd
  [eight, "exclude"], // 3.5sd
  [nine,"exclude"], // rec2
  [ten, "weight"], // rec4
  // // Screen scrolled down at this point
  [one, "exclude"], // rec6
  // [two, "exclude"], // evt25
  // [three, "exclude"], // evt50
  // [four, "exclude"], // evt25 part
  // [five, "exclude"], // evt50 part
  // [six, "exclude"]
];

exports.setupTwelve = [
  ["live5.6AIC"],
  [],
  [one,"characterKey"], // date
  [four,"target"], // raw
  [five,"exclude"], // 2sd
  [six,"exclude"], // 2.5sd
  [seven,"exclude"], // 3sd
  [eight, "exclude"], // 3.5sd
  [nine,"exclude"], // rec2
  [ten, "exclude"], // rec4
  // // Screen scrolled down at this point
  [one, "weight"], // rec6
  // [two, "exclude"], // evt25
  // [three, "exclude"], // evt50
  // [four, "exclude"], // evt25 part
  // [five, "exclude"], // evt50 part
  // [six, "exclude"]
];

// Ensure all setup files are listed here
exports.setupSuite = [
  // exports.setupOne,
  exports.setupTwo,
  exports.setupThree,
  exports.setupFour,
  exports.setupFive,
  exports.setupSix,
  exports.setupSeven,
  exports.setupEight,
  // exports.setupNine,
  // exports.setupTen,
  // exports.setupEleven,
  // exports.setupTwelve
];
