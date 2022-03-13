let quotes = ['Grab a cup of coffee! Enjoy the sweet aroma of coffee beans in a cafe.', 'What’s for lunch? A BLT sandwich and a smoothie!', 'Compile a list and go to your nearest grocery store!', 'Here is your sign to get some house chores done!', 'Call a friend or family member. Have a chat with them and catch up!'];

let mr;
//let gr;
//let br;
//let sr;

let wrds;

function setup() {
  createCanvas(800, 970);
  background(255);
  frameRate(60);
  introText();
  introText2();
  introText3();
  clickBall();
  console.log(quotes[int(random(quotes.length))]);
  console.log(quotes[3]);
  console.log(quotes.length);

}

function draw() {
}

function mousePressed() {
  mr = int(random(quotes.length));
  wrds = quotes[mr];
  fortText();
  console.log(wrds);
}

function clickBall() {
  fill(0);
  ellipse(width*0.653,height*0.16, 70);
}

//function fortRect() {
  //fill(rc, gc, bc);
  //rect(width*0.5,height*0.5, 100);
//}

//function fortBall2() {
  //fill(rc, gc, bc);
  //ellipse(width*0.5,height*0.5, 50, 150);
//}

function introText() {
  fill(0);
  textAlign(RIGHT);
  textSize(60);
  //this is a lie, you can click anywhere
  text('WELCOME', width*0.515, height*0.18);
}

function introText2() {
  fill(0);
  textAlign(RIGHT);
  textSize(15);
  text('to your personal styler guide! Click on the circle to', width*0.55, height*0.23);
}

function introText3(){
  fill(0);
  textAlign(RIGHT);
  textSize(15);
  text('the right to generate an outfit and a task.', width*0.474, height*0.25);
}

function fortText() {
  background(255);
  introText();
  introText2();
  introText3();
  clickBall();
  fill(0);
  textAlign(CENTER);
  textSize(22);
  //text('"', width*0.05, height*0.85,);
  //text('"', width*0.93, height*0.85,);
  text(wrds, width*0.5, height*0.9)
}
