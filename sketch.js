
1
<!DOCTYPE html>
2
<html lang="en">
3
  <head>
4
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.js"></script>
5
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/addons/p5.sound.min.js"></script>
6
    <link rel="stylesheet" type="text/css" href="style.css">
7
    <meta charset="utf-8" />
8
​
9
  </head>
10
  <body>
11
    <main>
12
    </main>
13
    <script src="sketch.js"></script>
14
  </body>
15
</html>function setup() {
16
  
17
  createCanvas(400, 400);
18
  
19
}
20
​
21
function draw() {
22
  
23
  background("white");
24
  
25
  fill("black");
26
  
27
  textSize (64);
28
  
29
  textAlign (CENTER, CENTER);
30
  
31
  let maximo = width;
32
  
33
  let minimo = 0;
34
  
35
  let palavra = "Amorim"; 
36
  
37
  // o número é responsável por deixar ao menos um  caractere na 
38
  
39
  // tela mesmo com a posição do mouse 0
40
  
41
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
42
  
43
  // passando todos os caracteres da posoção 0 até a passada pelo map
44
  
45
  let parcial = palavra.substring(0, quantidade)
46
  
47
  text (parcial, 200, 200)
48
​
49
}
50
​
