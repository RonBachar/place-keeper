'ust-strict';

var gBgColor;
var gfontColor;

var gForcasts = [
  'Some pretty interesting stuff will happen to you very soon',
  'On Wedensday you should get something you wanted for long time ',
  'On Saturday you will have a good rest',
];

var gUserData = {
  bgColor: null,
  fontColor: null,
  date: null,
  timeOfBirth: null,
};

function init() {
  let prefs = loadFromStorage(KEY);
  if (prefs) {
    console.log('Hello');
    gBgColor = prefs.bgColor;
    gfontColor = prefs.fontColor;
  }

  document.body.style.background = gBgColor;
  document.body.style.color = gfontColor;
  getForcast();
}

function showAge(newVal) {
  document.getElementById('sAge').innerHTML = newVal;
}

function onSubmitData(ev) {
  _dataSubmit(ev);
  saveToStorage(KEY, gUserData);
}
