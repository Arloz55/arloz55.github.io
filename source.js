var m=0;
var m1=0;
var m2 = 3;
var start=0;
var dur=2;
var radius = 200;
var mv ;
var analyzer;
var analyzer2;
var analyzer3;
var el;


function preload() {
  soundFormats('mp3');
  mySound = loadSound('Initialization Sequence.mp3');
  mySound2 = loadSound('Trapped.mp3');
  mySound3 = loadSound('United.mp3');
}

function setup() {

  sel = createSelect();
  sel.position(650, 177);
  sel.option('Elija una Canción');
  sel.option('Initialization Sequence');
  sel.option('Trapped');
  sel.option('United');
  sel.changed(mySelectEvent);

  button = createButton('Play');
  button.position(700, 258);
  button.mousePressed(mouseclicked);

  button2 = createButton('Pause');
  button2.position(740, 258);
  button2.mousePressed(mouseclicked2);

  button3 = createButton('Stop');
  button3.position(720, 288);
  button3.mousePressed(mouseclicked3);

  button5 = createButton('random');
  button5.position(870, 288);
  button5.mousePressed(mouseclicked5);

  button5 = createButton('Next');
  button5.position(815, 258);
  button5.mousePressed(mouseclicked6);

  button6 = createButton('Prev');
  button6.position(630, 258);
  button6.mousePressed(mouseclicked7);

  button4 = createButton('loop');
  button4.position(967, 288);
  button4.mousePressed(mouseclicked4);

  vslider2 = createSlider(0, 100,50);
  vslider2.position(640 , 350);
  vslider2.style('width', '200px');

//
  
  var cnv = createCanvas(200,200);
  cnv.position(370, 400);
  
  
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySound);
  analyzer2 = new p5.Amplitude();
  analyzer2.setInput(mySound2);
  analyzer3 = new p5.Amplitude();
  analyzer3.setInput(mySound3);
}

function draw(){

  mv = masterVolume(vslider2.value()/100);
  background(55,125,34);
 
  var rms = analyzer.getLevel();
  var rms1 = analyzer2.getLevel();
  var rms2 = analyzer3.getLevel();
  fill(190,0,14);
  stroke(0);

  el=ellipse(100, 100, 10+(rms+rms1+rms2)*300, 10+(rms+rms1+rms2)*300 );

}

function mySelectEvent() {

  mySound.stop();
  mySound2.stop();
  mySound3.stop();

  var item = sel.value();

 switch(item){

case 'Initialization Sequence' :
console.log("good");
m=1;
break;

case 'Trapped':
console.log("good 2");
m=2;
break;

case 'United':
console.log("good 3");
m=3;
break;

default: m=0;


}
}

function mouseclicked(){

switch(m){

  case 1:
  console.log("primero");
  mySound.play();
break;
case 2:
console.log("segundo");
mySound2.play();
break;
case 3:
console.log("tercero");
mySound3.play();
break;
default: console.log("No pista");

}
}

function mouseclicked2(){


  switch(m){
  
    case 1:
    console.log("primero");
    mySound.pause();
  break;
  case 2:
  console.log("segundo");
  mySound2.pause();
  break;
  case 3:
  console.log("tercero");
  mySound3.pause();
  break;
  default: console.log("No pista");
  
  }
  }

  function mouseclicked3(){


    switch(m){
    
    case 1:
    console.log("primero");
    mySound.stop();
    break;
    case 2:
    console.log("segundo");
    mySound2.stop();
    break;
    case 3:
    console.log("tercero");
    mySound3.stop();
    break;
    default: console.log("No pista");
    
    }
    }

    function mouseclicked4(){
      mySound.stop();
      mySound2.stop();
      mySound3.stop();

      switch(m){
      
        case 1:
        console.log("primero");
        mySound.loop(1,1,1,start,dur);
      break;
      case 2:
      console.log("segundo");
      mySound2.loop(1,1,1,start,dur);
      break;
      case 3:
      console.log("tercero");
      mySound3.loop(1,1,1,start,dur);
      break;
      default: console.log("No pista");
      
      
      }
      
      }
    
      function mouseclicked5(){

        mySound.stop();
        mySound2.stop();
        mySound3.stop();
        var n = Math.floor(Math.random()*3) +1 ; 

        console.log(n);

        switch(n){
        
        case 1:
        console.log("primero");
        mySound.play();
        sel.value('Initialization Sequence')
        m=1;

        break;
        case 2:
        console.log("segundo");
        mySound2.play();
        sel.value('Trapped')
        m=2;

        break;
        case 3:
        console.log("tercero");
        mySound3.play();
        sel.value('United')
        m=3;

        break;
        default: console.log("No pista");
        
        }
        }

        function mouseclicked6(){

          mySound.stop();
          mySound2.stop();
          mySound3.stop();
          m1= m1 +1;
  
          console.log(m1);
  
          switch(m1){
          
        
          case 1:
          console.log("primero");
          mySound.play();
          sel.value('Initialization Sequence')
          m=1;
          
  
          break;
          case 2:
          console.log("segundo");
          mySound2.play();
          sel.value('Trapped')
          m=2;
          
  
          break;
          case 3:
          console.log("tercero");
          mySound3.play();
          sel.value('United')
          m1=0;
          m=3;
  
          break;
          default : m =0;
 
          }
          }

        function mouseclicked7(){

          
          m2= m2 -1;

          mySound.stop();
          mySound2.stop();
          mySound3.stop();
  
          console.log(m2);
  
          switch(m2){
          
        

          case 1:
          console.log("primero");
          mySound.play();
          sel.value('Initialization Sequence')
          m=1;
          m2=4;
          
  
          break;
          case 2:
          console.log("segundo");
          mySound2.play();
          sel.value('Trapped')
          m=2;
          
  
          break;

          case 3:
          console.log("tercero");
          mySound3.play();
          sel.value('United')
         
          m=3;
  
          break;          
          }
          }

