let orbitRadius=100
let planetRadius=10
let angle=0
function setup() {
  let canvas = createCanvas(800, 800);
  canvas.parent("p5js");
  
}

function draw() {

  
  //mercury
  background('black')
  x=orbitRadius*cos(angle)+400
  y=orbitRadius*sin(angle)+400
  fill ('cyan')
  circle(x,y,planetRadius)
  
  //venus
  a=(orbitRadius+25)*cos(angle*0.9)+400
  b=(orbitRadius+25)*sin(angle*0.9)+400
  fill ('green')
  circle(a,b,planetRadius*2)
  
  //earth
  c=(orbitRadius+50)*cos(angle*0.8)+400
  d=(orbitRadius+50)*sin(angle*0.8)+400
  fill ('blue')
  earth = circle(c,d,planetRadius*2)
  
  //moon
  moonOrbit = 20
  moonX = c + moonOrbit * cos(angle*3)
  moonY = d + moonOrbit * sin(angle*3)
  fill('white')
  circle(moonX, moonY, planetRadius)
  
  //mars
  e=(orbitRadius+75)*cos(angle*0.6)+400
  f=(orbitRadius+75)*sin(angle*0.6)+400
  fill ('red')
  circle(e,f,planetRadius*1.5)
  
    
  //jupiter
  g=(orbitRadius+125)*cos(angle*0.5)+400
  h=(orbitRadius+125)*sin(angle*0.5)+400
  fill ('brown')
  circle(g,h,planetRadius*5)
  
  //saturn
  i=(orbitRadius+175)*cos(angle*0.35)+400
  j=(orbitRadius+175)*sin(angle*0.35)+400
  fill ('white')
  circle(i,j,planetRadius*3.5)
  fill ('yellow')
  circle(i,j,planetRadius*2.5)
  
  //uranus
  k=(orbitRadius+225)*cos(angle*0.2)+400
  l=(orbitRadius+200)*sin(angle*0.2)+400
  fill ('lightgreen')
  circle(k,l,planetRadius*3)
  
  
  //neptune
  m=(orbitRadius+275)*cos(angle*0.1)+400
  n=(orbitRadius+275)*sin(angle*0.1)+400
  fill ('purple')
  circle(m,n,planetRadius*2.7)
  
  
  fill("yellow")
  circle(400,400,100)
  angle+=0.05

}