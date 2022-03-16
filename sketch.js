let quotes = ['"Grab a cup of coffee! Enjoy      the sweet aroma of coffee       beans in a cafe."', '   "What’s for lunch? A BLT           sandwich and a smoothie!"', '"Compile a grocery list and       go to your nearest grocery      store!"', ' "Here is your sign to get           some house chores done!"', '"Call a friend or relative.        Have a chat with them and       catch up!"'];

let mr;
let topsImg = [];
let accessoriesImg = [];
let bottomsImg = [];
let myFontb;
let wrds;


function preload() {
//bottoms
  bottomsImg[0]=loadImage("Bottoms/bottom0.jpg");
  bottomsImg[1]=loadImage("Bottoms/bottom1.jpg");
  bottomsImg[2]=loadImage("Bottoms/bottom2.jpg");
  bottomsImg[3]=loadImage("Bottoms/bottom3.jpg");
  bottomsImg[4]=loadImage("Bottoms/bottom4.jpg");
  bottomsImg[5]=loadImage("Bottoms/bottom5.jpg");
  bottomsImg[6]=loadImage("Bottoms/bottom6.jpg");
  bottomsImg[7]=loadImage("Bottoms/bottom7.jpg");

//tops
  topsImg[0]=loadImage("Tops/top0.jpg");
  topsImg[1]=loadImage("Tops/top1.jpg");
  topsImg[2]=loadImage("Tops/top2.jpg");
  topsImg[3]=loadImage("Tops/top3.jpg");
  topsImg[4]=loadImage("Tops/top4.jpg");
  topsImg[5]=loadImage("Tops/top5.jpg");
  topsImg[6]=loadImage("Tops/top6.jpg");
  topsImg[7]=loadImage("Tops/top7.jpg");

//accessories
  accessoriesImg[0]=loadImage("Accessories/accessory0.jpg");
  accessoriesImg[1]=loadImage("Accessories/accessory1.jpg");
  accessoriesImg[2]=loadImage("Accessories/accessory2.jpg");
  accessoriesImg[3]=loadImage("Accessories/accessory3.jpg");
  accessoriesImg[4]=loadImage("Accessories/accessory4.jpg");
  accessoriesImg[5]=loadImage("Accessories/accessory5.jpg");
  accessoriesImg[6]=loadImage("Accessories/accessory6.jpg");
  accessoriesImg[7]=loadImage("Accessories/accessory7.jpg");

//font
  myFontb = loadFont('Font/Perpetua-Bold.ttf');
  }


function setup() {
  createCanvas(800, 970);
  background(250, 218, 221);
  textFont(myFontb);
  topsLine();
  bottomsLine();
  accessoriesLine();
  topsText();
  bottomsText();
  accessoriesText();
  introText();
  introText2();
  introText3();
  blackLine();
  clickBall();
  console.log(quotes[int(random(quotes.length))]);
  console.log(quotes[3]);
  console.log(quotes.length);
}

function mousePressed() {
  mr = int(random(quotes.length));
  wrds = quotes[mr];

  createCanvas(800, 970);
  background(250, 218, 221);
  frameRate(60);
  topsLine();
  bottomsLine();
  accessoriesLine();
  topsText();
  bottomsText();
  accessoriesText();
  introText();
  introText2();
  introText3();
  blackLine();
  clickBall();
  fortText();
  console.log(wrds);

  bottomsResult = int(random(bottomsImg.length))
  image(bottomsImg[bottomsResult], width*0.534, height*0.247, width*0.475, height*0.433);

  topsResult = int(random(topsImg.length))
  image(topsImg[topsResult], width*0.138, height*0.289, width*0.475, height*0.464);

  accessoriesResult = int(random(accessoriesImg.length))
  image(accessoriesImg[accessoriesResult], width*0.525, height*0.649, width*0.475, height*0.299);
}

function accessoriesLine() {
  noStroke();
  fill(114, 84, 70);
  rect(width*0, height*0.702, width*0.469, height*0.031);
  rect(width*0.85, height*0.711, width*0.188, height*0.010);
}

function bottomsLine() {
  noStroke();
  fill(114, 84, 70);
  rect(width*0, height*0.402, width*0.45, height*0.052);
  rect(width*0.9075, height*0.420, width*0.188, height*0.021);
}

function topsLine() {
  noStroke();
  fill(114, 84, 70);
  rect(width*0, height*0.531, width*0.15, height*0.080);
  rect(width*0.5, height*0.564, width*0.5, height*0.021);
}

function accessoriesText() {
  fill(179, 146, 131);
  textAlign(LEFT);
  textSize(40);
  text('ACCESSORIES.', width*0.5, height*0.73);
  textFont(myFontb);
}

function bottomsText() {
  fill(179, 146, 131);
  textAlign(LEFT);
  textSize(65);
  text('BOTTOMS.', width*0.48, height*0.45);
  textFont(myFontb);
}

function topsText() {
  fill(179, 146, 131);
  textAlign(RIGHT);
  textSize(85);
  text('TOPS.', width*0.456, height*0.6);
  textFont(myFontb);
}

function clickBall() {
  noStroke();
  fill(179, 146, 131);
  ellipse(width*0.6,height*0.118, 50);
}

function blackLine() {
  noStroke();
  fill(179, 146, 131);
  rect(width*0.15, height*0.168, width*0.375, height*0.003);
}

function introText() {
  fill(114, 84, 70);
  textAlign(RIGHT);
  textSize(65);
  text('WELCOME', width*0.52, height*0.135);
  textFont(myFontb);
}

function introText2() {
  fill(114, 84, 70);
  textAlign(RIGHT);
  textSize(15);
  text('to your personal styler guide! Click on the circle', width*0.535, height*0.21);
  textFont(myFontb);
}

function introText3(){
  fill(114, 84, 70);
  textAlign(RIGHT);
  textSize(15);
  text('to the right to generate an outfit and a task.', width*0.497, height*0.23);
  textFont(myFontb);
}

function fortText() {
  background(250, 218, 221);
  topsLine();
  bottomsLine();
  accessoriesLine();
  topsText();
  bottomsText();
  accessoriesText()
  introText();
  introText2();
  introText3();
  blackLine();
  clickBall();
  fill(114, 84, 70);
  textAlign(CENTER);
  textSize(22);
  text(wrds, width*0.14, height*0.82, width*0.35, height*0.9)
  textFont(myFontb);
}
