var ball2,database
var position
function setup() {
  database = firebase.database();
  console.log(database);
  createCanvas(500,500)
  ball2=createSprite(250,250,20,20)
  ball2.shapeColor = "blue"
  var ball2Position = database.ref('ball/position')
  ball2Position.on("value",readPosition,showError)
}
function draw() {
background("white")
if(keyDown(LEFT_ARROW)){
writePosition(-1,0)
}
if(keyDown(RIGHT_ARROW)){
  writePosition(1,0)
  }
  if(keyDown(UP_ARROW)){
    writePosition(0,-1)
    }
    if(keyDown(DOWN_ARROW)){
      writePosition(0,1)
      }
      drawSprites();
}
function writePosition(x,y) {
  database.ref('ball/position').set({
    'x':position.x+x,
    'y' :position.y+y
  })

}
function readPosition(data) {
  position = data.val();
  console.log(position.x);
  ball2.x=position.x
  ball2.y=position.y
}
function showError() {
  console.log("error in writing database")
}