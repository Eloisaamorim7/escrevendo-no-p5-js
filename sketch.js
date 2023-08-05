<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/addons/p5.sound.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />

  </head>
  <body>
    <main>
    </main>
    <script src="sketch.js"></script>
  </body>
</html>function setup() {
  
  createCanvas(400, 400);
  
}

function draw() {
  
  background("white");
  
  fill("black");
  
  textSize (64);
  
  textAlign (CENTER, CENTER);
  
  let maximo = width;
  
  let minimo = 0;
  
  let palavra = "Amorim"; 
  
  // o número é responsável por deixar ao menos um  caractere na 
  
  // tela mesmo com a posição do mouse 0
  
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  
  // passando todos os caracteres da posoção 0 até a passada pelo map
  
  let parcial = palavra.substring(0, quantidade)
  
  text (parcial, 200, 200)

}
