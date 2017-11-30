'use strict';
function namesCompare() {
  for (var nameIndex = 0; nameIndex < firstNamesArr.length; nameIndex++) {
    var randomNumber = Math.floor(Math.random() * firstNamesArr.length);
    var heroNames = firstNamesArr[randomNumber] + ' ' + secondNamesArr[randomNumber];
  }

  return heroNames;
}

function colorCoatChoose() {
  for (var colorCoatIndex = 0; colorCoatIndex < colorCoatsArr.length; colorCoatIndex++) {
    var randomColor = Math.floor(Math.random() * colorCoatsArr.length);
    var color = colorCoatsArr[randomColor];
  }

  return color;
}

function colorEyeChoose() {
  for (var colorEyeIndex = 0; colorEyeIndex < colorEyesArr.length; colorEyeIndex++) {
    var randomColor = Math.floor(Math.random() * colorEyesArr.length);
    var color = colorEyesArr[randomColor];
  }

  return color;
}

var firstNamesArr = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var secondNamesArr = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var colorCoatsArr = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var colorEyesArr = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [
  {
    names: namesCompare(),
    coatColor: colorCoatChoose(),
    eyesColor: colorEyeChoose()
  },
  {
    names: namesCompare(),
    coatColor: colorCoatChoose(),
    eyesColor: colorEyeChoose()
  },
  {
    names: namesCompare(),
    coatColor: colorCoatChoose(),
    eyesColor: colorEyeChoose()
  },
  {
    names: namesCompare(),
    coatColor: colorCoatChoose(),
    eyesColor: colorEyeChoose()
  }
];

var setupBlock = document.querySelector('.setup');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupSimilarList = document.querySelector('.setup-similar-list');

var fragment = document.createDocumentFragment();

var renderWizard = function (wizard) {
  var wizardPerson = similarWizardTemplate.cloneNode(true);

  wizardPerson.querySelector('.setup-similar-label').textContent = wizard.names;
  wizardPerson.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardPerson.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardPerson;
};

setupBlock.classList.remove('hidden');

for (var stepClone = 0; stepClone < wizards.length; stepClone++) {
  fragment.appendChild(renderWizard(wizards[stepClone]));
}

setupSimilarList.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
