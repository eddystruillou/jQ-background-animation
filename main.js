const couleurs = ["red", "green", "blue", "LightSkyBlue", "MediumAquamarine", "cyan", "SaddleBrown", "GreenYellow", "DeepPink", "gold"];

$('document').ready(function () {
  $('button').click(function () {
    $('body').css('background', function () {
      return couleurs[Math.floor(Math.random() * couleurs.length)];
    })
  })
});