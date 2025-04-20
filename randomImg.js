var possible_images;

function preload() {
  //create an array of image files names
  possible_images = [
    "/drawingProcess/organisms (1).jpg",
    "/drawingProcess/organisms (2).jpg",
    "/drawingProcess/organisms (3).jpg",
    "/drawingProcess/organisms (4).jpg",
    "/drawingProcess/organisms (5).jpg",
    "/drawingProcess/organisms (6).jpg",
    "/drawingProcess/organisms (7).jpg",
    "/drawingProcess/organisms (8).jpg",
    "/drawingProcess/september2024 (1).jpg",
    "/drawingProcess/september2024 (2).jpg",
    "/drawingProcess/september2024 (3).jpg",
    "/drawingProcess/september2024 (4).jpg",
    "/drawingProcess/september2024 (5).jpg",
    "/drawingProcess/september2024 (6).jpg",
    "/drawingProcess/september2024 (7).jpg",
    "/drawingProcess/september2024 (8).jpg",
    "/drawingProcess/september2024 (9).jpg",
    "/drawingProcess/september2024 (10).jpg",
    "/drawingProcess/september2024 (11).jpg",
    "/drawingProcess/september2024 (12).jpg",
  ];

  //pick a random image
  var pos = floor(random(possible_images.length));
  //load the picked image
  BPM = loadImage(possible_images[pos]);
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  cnv.style("z-index", "-1");
  cnv.style("position", "fixed");
}

function draw() {
  tint(255, 100);

  background("#e7a8a8");
  image(BPM, 0, 0);
}
