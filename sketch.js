
let main_img = [[]];
let segments = [];
let second_img = [[]];
let filter = [[]];
let other = [[]];
let fin = [[]];
let title_space =  100;
let extra_space = 30;

function setup() {
  createCanvas(2000, 1000);
  main_img = [[0,0,1,1,1,1,1,1,1,1,0,0],[0,1,1,1,0,0,1,0,0,0,1,0],[1,0,0,1,1,1,1,0,0,0,1,1],[1,0,0,1,1,1,1,1,1,1,1,1],[1,0,0,1,1,0,0,0,1,0,0,1],[1,1,1,1,1,0,0,0,1,0,0,1],[0,1,1,1,1,1,1,1,1,1,1,0],[0,0,1,0,1,0,0,1,0,1,0,0],[0,0,1,0,1,0,0,1,0,1,0,0],[0,0,0,1,0,0,0,0,1,0,0,0],[0,0,0,1,1,1,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0]];
  second_img = [[0,0,1,1,1,1,1,1,1,1,0,0],[0,1,1,1,0,0,1,0,0,0,1,0],[1,0,0,1,1,1,1,0,0,0,1,1],[1,0,0,1,1,1,1,1,1,1,1,1],[1,0,0,1,1,0,0,0,1,0,0,1],[1,1,1,1,1,0,0,0,1,0,0,1],[0,1,1,1,1,1,1,1,1,1,1,0],[0,0,1,0,1,0,0,1,0,1,0,0],[0,0,1,0,1,0,0,1,0,1,0,0],[0,0,0,1,0,0,0,0,1,0,0,0],[0,0,0,1,1,1,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0]];
  filter = [[1/9, 1/9, 1/9], [1/9, 1/9, 1/9], [1/9, 1/9, 1/9]];
  other = [[0,0,0],[0,0,0],[0,0,0]];
  fin =[[0]];
  drawMainBoards();
  segments = createSegments(40, 40);
  textSize(15);
  stroke('black');
  text("Hover over the top left board!", 15, 15);
  text("Ever wondered how blurred images are created? How about edge detection in images?",800, 50);
  text("The answer comes in the form of convolution! Convolution works by applying a convolution filter:", 800, 65);
  text("the filter “swipes” across the image, allowing all pixels in image (except the edges) a chance to be at", 800, 80); 
  text("the center. Next, the filter is element-wise multiplied with the values within the window.", 800, 95);
  text("The final value becomes the new value of the center pixel in the filtered image!", 800, 110);
  text("Here, we have a box blur, where we simply take the average of all the pixels in the window. ", 800, 125);
  text("Lets see how this 3x3 box blue works on a  12x12 image. Hover over the original image (top left corner)", 800, 140);
  text(" to swipe the filter across.See the resulting image on the bottom left, and calculation below!", 800, 155)
  textSize(10);
}

function drawMainBoards()
{
  stroke(0,0,0);
  pixels2image(main_img, 40, 40);
  pixels2num(main_img, 40+14*20, 40, 1);
  line(30*20, 40, 30*20, 40+12*20);
  pixels2image(second_img, 40, 40+ 14*20);
  pixels2num(second_img, 40+ 14*20, 40+ 14*20, 1.4);
  line(35*20, 40+14*20, 35*20, 40+31*20);

  textSize(45);
  text("Classic Convolution", 800, 90);
  textSize(15);
  stroke('green');
  text("Convolution Filter", 805, 190+title_space+extra_space)
  pixels2num(filter, 800, 200+title_space+extra_space, 2);
  stroke('black');
  text("Original", 31*20, 40+6*20);
  text("New", 36*20, 40+22.5*20);

  fill(255,255,255);
  ellipse(960, 260+title_space+extra_space, 20, 20);
  fill(255,255,255);
  ellipse(960, 260+title_space+extra_space, 10, 10);
  fill(0,0,0);
  text("→", 1150, 260+title_space+extra_space);
  text("Window", 1030, 190+title_space+extra_space);
  pixels2num(other, 1000, 200+title_space+extra_space, 2 );
  stroke('blue');
  text("New Pixel Value", 1170, 190+title_space+extra_space)
  pixels2num(fin, 1200, 240+title_space+extra_space, 2 )
  stroke('black');
  
    strokeWeight(1);
    text("Hover over the top left board! ↓", 15, 20);
    text("Ever wondered how blurred images are created? How about edge detection in images?",800, 50+title_space);
    text("The answer comes in the form of convolution! Convolution works by applying a convolution filter:", 800, 65+title_space);
    text("the filter is flipped, then it “swipes” across the image, so every non-edge pixel in the image has", 800, 80+title_space); 
    text("a moment in the center. Next, the filter is element-wise multiplied with the values within the window.", 800, 95+title_space);
    text("The final value becomes the new value of the center pixel in the filtered image! Here, we have a simple blur,", 800, 110+title_space);
    text("where we just take the average of all the pixels in the window (so no need to flip).", 800, 125+title_space);
    text("Let's see how this 3x3 filter works on a  12x12 image. Hover over the original image (top left corner)", 800, 140+title_space);
    text(" to swipe the filter across. See the resulting image on the bottom left and follow the calculations below!", 800, 155+title_space)
  textSize(10);

}

function draw() {
  fill(255,255,255);
  rect(0,0, 2000, 100);
  clear();

     drawMainBoards();
  segments.forEach(function(segment, index) 
  {
    
    //console.log(mouseX)
    //.log(segment.xPos)
   if ( (segment.xPos < mouseX ) && (mouseX < segment.xPos+20) &&  (segment.yPos < mouseY) && (mouseY < segment.yPos+20))
   {
    
     fill(0,0,0,0);
     stroke('green');
     strokeWeight(2);
     rect(segment.xPos, segment.yPos, 60, 60);
     stroke('blue');
   
    rect(segment.xPos+20, 14*20+segment.yPos+20, 20, 20);
    strokeWeight(1);

    
     convolve(segment);
     fin[0][0] = segment.finVal;
   }
  })
 

}

function convolve(segment)
{
  
  {
    finIndexX = segment.begIndexX+1;
    finIndexY = segment.begIndexY+1;
    console.log(segment.begIndexX);
    console.log(segment.begIndexY);
    let finalVal = 0;
    for (let i = 0; i < filter.length; i++)
    {
      for (let j = 0; j < filter[i].length; j++)
      {
          let temp = filter[i][j]*main_img[segment.begIndexX+i][segment.begIndexY+j];
          other[i][j] = main_img[segment.begIndexX+i][segment.begIndexY+j];
          finalVal +=temp;
      }
    }
    if (!segment.done)
    {
      second_img[finIndexX][finIndexY] = finalVal;
      segment.finVal = finalVal;
    }
    segment.finish();

  }
}

function pixels2image(pixels, startx, starty)
{
   for (let j = 0; j< pixels.length; j++)
   {
     for (let i = 0; i < pixels[j].length; i++)
     {
       let factor = pixels[j][i];
       fill(255-255*factor,255-255*factor,255-255*factor );
       rect(startx+20*j+2, starty+20*i+2, 20, 20)
     }
   }
}

function pixels2num(pixels, startx, starty, scale)
{
   for (let j = 0; j< pixels.length; j++)
   {
     for (let i = 0; i < pixels[j].length; i++)
     {
       let temp = 1;
      
       if (pixels[j][i] == 0)
       {
            temp = 0;
       }
      
       fill(255,255,255);
       rect(startx+ 20*j*scale+2, starty + 20*scale*i+2, 20*scale, 20*scale);
       fill(0,0,0);
       let final = parseFloat(pixels[j][i].toFixed(2))
       text(final + "", startx+ 20*scale*j+10, starty + 20*scale*i+15);
     }
   }
}

function createSegments(startX, startY)
{
  let segments = [];
  for (let i = 0; i < main_img.length-2; i++)
  {
    for (let j = 0; j < main_img[i].length-2; j++)
  {
      {
        let s = new Segment( startX + 20*(i), startY + 20*(j), i, j)
        segments.push(s);
      }
  }
  }
  return segments;
}

class Segment
{
  

  constructor(xPos, yPos, begIndexX, begIndexY)
  {
    this.xPos = xPos;
    this.yPos =yPos;
    this.begIndexX=begIndexX;
    this.begIndexY=begIndexY;
    this.done = false; 
    this.finVal = 0;
  }

   finish(){
     this.done = true;
   }

}
