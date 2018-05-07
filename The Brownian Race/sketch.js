
box_width = 100;
box_height = 100;

step_size = 30


flag = 0;
function setup() {
    
    if (flag==0){
    var seconds_left = 0;
    var interval = setInterval(function() {
    seconds_left+=1
    document.getElementById('timer_div').innerHTML = seconds_left/10.;

    if (x<box_width && y<box_height)
    {
      flag=0;
      document.getElementById('timer_div').innerHTML = 'Congrats You Did It! '+String(seconds_left/10.)+' seconds';
      clearInterval(interval);
    }
    }, 100);
    }


    createCanvas(710, 400);
    
      // get the width and height of the text so we can center it initially
    x = width / 2 - box_width/ 2;
    y = height / 2 - box_height / 2;
  
    // Make winners box
    fill(250,10,10);
    rect(0, 0, box_width, box_height)
    
    seconds_left = 0;
    
  }


function draw() {
  background(204, 120);
  fill(250,10,10);
  rect(0, 0, 2*box_width, 2*box_height)

  // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= x && mouseX <= x + box_width &&
    mouseY >= y && mouseY <= y + box_height) {
    x += random(-10, 10);
    y += random(-10, 10);
  }
    
    
  fill(120,250,10);
  rect(x, y, box_width, box_height)
    
  
  if (x<box_width && y<box_height){
      fill(10,20,200);
      rect(x, y, box_width, box_height)
      }
    
    
    
}
