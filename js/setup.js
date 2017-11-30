function namesCompare () {
  for (var i = 0; i < firstNamesArr.length; i++) {
    var randomNumber = Math.floor(Math.random() * firstNamesArr.length);
    var heroNames = firstNamesArr[randomNumber] + ' ' + secondNamesArr[randomNumber];
    
    return heroNames;
  }
}

function colorCoatChoose () {
  for (var i = 0; i < colorCoatsArr.length; i++) {
    var randomColor = Math.floor(Math.random() * colorCoatsArr.length);
    var color = colorCoatsArr[randomColor];
    
    return color;
  }
}

function colorEyeChoose () {
  for (var i = 0; i < colorEyesArr.length; i++) {
    var randomColor = Math.floor(Math.random() * colorEyesArr.length);
    var color = colorEyesArr[randomColor];
    
    return color;
  }
}


var setupBlock = document.querySelector('.setup');


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

var template = document.querySelector('#similar-wizard-template').content;

setupBlock.classList.remove('hidden');