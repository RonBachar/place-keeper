'use-strict';
const KEY = 'pref';

function _dataSubmit(ev) {
  ev.preventDefault();

  var bgColor = document.getElementById('background-color').value;
  var fontColor = document.getElementById('text-color').value;
  var dateOfBirth = document.getElementById('birth-date').value;
  var timeOfBirth = document.getElementById('birth-time').value;
  gUserData.bgColor = bgColor;
  gUserData.fontColor = fontColor;
  gUserData.date = dateOfBirth;
  gUserData.timeOfBirth = timeOfBirth;
}

function getForcast() {
  var rndIdx = getRandomIntInclusive(0, 2);
  var strHtml = '';
  forcast = gForcasts[rndIdx];
  strHtml += `
    <h2>${forcast}</h2>

    `;
  document.getElementById('forecast').innerHTML = strHtml;
}
