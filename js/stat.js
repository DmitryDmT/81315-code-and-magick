window.renderStatistics = function(ctx, names, times) {
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

  var getRandomColor = function() {
    return Math.random();
  };

  var getMainPersonBar = function() {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillRect(initialBarX + marginBar * i, initialBarY, barWidth, times[i] * step);
    ctx.fill();
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], initialTextX + marginText * i, initialTextY);
    ctx.closePath();
  };

  var getOtherPersonsBar = function() {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(16, 7, 133, ' + getRandomColor() + ')';
    ctx.fillRect(initialBarX + marginBar * i, initialBarY, barWidth, times[i] * step);
    ctx.fill();
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], initialTextX + marginText * i, initialTextY);
    ctx.closePath();
  };

  var getTimesBar = function(times) {
    for(var i = 0; i < times.length; i++) {
      var time = times[i];

      if (time > maxTime) {
        maxTime = time;
      }
    }
  };

  ctx.beginPath();
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.rect(110, 20, 420, 270);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(100, 10, 420, 270);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 115, 30);
  ctx.fillText('Список результатов:', 115, 50);
  ctx.closePath();

  getTimesBar(times);

  step = statsHeight / (maxTime - 0);

  for(var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      getMainPersonBar();
    } else {
      getOtherPersonsBar();
    }
    
    ctx.fillText(times[i].toFixed(), initialTextX + marginText * i, times[i] * step + 230);
  }
};
