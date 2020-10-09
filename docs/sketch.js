let age = 30;
let figure;
function preload() {
  figure = loadImage("./assets/mask3.jpg", (a) => {
    console.log("loaded", a);
  });
}
function setup() {
  createCanvas(500, 500);
  figure.resize(500, 500);
}

function draw() {
  background(255);

  fill(0);
  noStroke();
  // image(dog, mouseX, mouseY);
  let tiles = mouseX / 10;
  let tileSize = width / tiles;

  translate(tileSize / 2, tileSize / 2);
  for (let x = 0; x < tiles; x++) {
    for (let y = 0; y < tiles; y++) {
      let c = figure.get(int(x * tileSize), int(y * tileSize));
      let size = map(brightness(c), 0, 255, tileSize, 0);
      console.log(c);
      ellipse(x * tileSize, y * tileSize, size, size);
      // ellipse(y * 50, height / 2, 30, 30);
    }
    // fill(random(0, 255), random(0, 255), random(0, 255));
  }
}
