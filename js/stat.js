function renderStatistics(ctx, names, times) {
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = "white";
  
  ctx.fillRect(90, 0, 420, 270);
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  
  ctx.font = "16px PT Mono";
  ctx.fillText('Ура вы победили!', 110, 50);
  ctx.fillText('Список результатов:', 110, 70);
  
}