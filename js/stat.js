window.renderStatistics = function(ctx, names, times) {
  ctx.beginPath();
  ctx.rect(110, 20, 420, 270);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fill();
  ctx.closePath();
  
  ctx.beginPath();
  ctx.rect(100, 10, 420, 270);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.closePath();
  
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000000';
  ctx.fillText('Ура вы победили!', 115, 30);
  ctx.fillText('Список результатов:', 115, 50);
  
  var maxTime = -1;
  var indexName = -1;
  
  for(var i = 0; i < times.length; i++) {
    var time = times[i];
    
    if (time > maxTime) {
      maxTime = time;
      indexName = i;
    }
  }
  
//  ctx.beginPath();
//  ctx.rect(130, 100, 40, 150);
//  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
//  ctx.fill();
//  ctx.closePath();
//  
//  ctx.beginPath();
//  ctx.rect(220, 100, 40, 150);
//  ctx.fillStyle = '#100785';
//  ctx.fill();
//  ctx.closePath();
//  
//  ctx.beginPath();
//  ctx.rect(310, 100, 40, 150);
//  ctx.fillStyle = 'rgba(16, 7, 133, 1)';
//  ctx.fill();
//  ctx.closePath();
//  
//  ctx.beginPath();
//  ctx.rect(400, 100, 40, 150);
//  ctx.fillStyle = 'rgba(16, 7, 133, 1)';
//  ctx.fill();
//  ctx.closePath();
  
  var statsHeight = -150;
  var step = statsHeight / (maxTime - 0);
  
  for(var i = 0; i < times.length; i++) {
    ctx.beginPath();
    ctx.fillRect(130 + 100 * i, 250, 40, times[i] * step);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.fillStyle = 'red';
    ctx.fillText(names[i], 130 + 100 * i, 260);
    ctx.fill();
    ctx.closePath();
  }
}