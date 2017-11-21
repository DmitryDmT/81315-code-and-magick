'use strict';

window.renderStatistics = function (ctx, names, times) {
  var barWidth = 40;
  var initialBarX = 130;
  var initialBarY = 250;
  var initialTextX = 130;
  var initialTextY = 260;
  var marginBar = 100;
  var marginText = 100;
  var step;
  var maxTime = -1;
  var statsHeight = -150;

  var getPersonBar = function () {
    ctx.fillRect(initialBarX + marginBar * i, initialBarY, barWidth, times[i] * step);
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], initialTextX + marginText * i, initialTextY);
  };

  var getTimesBar = function (timesArr) {
    for (var i = 0; i < timesArr.length; i++) {
      maxTime = Math.max(timesArr[i], maxTime);
    }
  };

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 115, 30);
  ctx.fillText('Список результатов:', 115, 50);

  getTimesBar(times);

  step = statsHeight / (maxTime - 0);

  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(16, 7, 133, ' + Math.random() + ')';
    getPersonBar();

    ctx.fillText(times[i].toFixed(), initialTextX + marginText * i, times[i] * step + 230);
  }
};
