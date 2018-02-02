
var osc;
var env;
var slider;
var canv;

function setup(){
    canv = createCanvas(200,200);
    canv.position(500,500)
    background(128);

    slider = createSlider(0,5,2.5,0);
    slider.position(60, 590);
    slider.style('width', '200px');

    env = new p5.Env(0.01,0.2,5,0.5);

    osc= new p5.Oscillator();
    osc.amp(env);
    osc.freq(800);
    osc.setType('square');
    osc.start();
}

function keyPressed(){
    
    var fr = 0;
    switch(key){

        case "Q":
        console.log("C5");
        fr = 523.25;
        fill(240);
        ellipse(100,100,100,100);
        break;

        case "2":
        console.log("C#5");
        fr = 554.36;
        fill(240);
        ellipse(100,100,100,100);
        break;
        
        case "W":
        console.log("D5");
        fr = 587.33;
        fill(240);
        ellipse(100,100,100,100);
        break;

        case "3":
        console.log("D#5");
        fr = 622.25;
        fill(240);
        ellipse(100,100,100,100);
        break;

        case "E":
        console.log("E5");
        fr = 659.25;
        fill(240);
        ellipse(100,100,100,100);
        break;
        
        case "R":
        console.log("F5");
        fr = 698.45;
        fill(240);
        ellipse(100,100,100,100);
        break;

        case "5":
        console.log("F#5");
        fr = 740;
        fill(240);
        ellipse(100,100,100,100);
        break;

        case "T":
        console.log("G5");
        fr = 784;
        fill(240);
        ellipse(100,100,100,100);
        break;
        
        case "6":
        console.log("G#5");
        fr = 830.60;
        fill(240);
        ellipse(100,100,100,100);
        break;

        case "Y":
        console.log("A5");
        fr = 880;
        fill(240);
        ellipse(100,100,100,100);
        break;

        case "7":
        console.log("A#5");
        fr = 932.32;
        fill(240);
        ellipse(100,100,100,100);
        break;
        
        case "U":
        console.log("B5");
        fr = 987.76;
        fill(240);
        ellipse(100,100,100,100);
        break;

        case "I":
        console.log("C6");
        fr = 1046.50;
        fill(240);
        ellipse(100,100,100,100);
        break;

        case "9":
        console.log("C#6");
        fr = 1108.73;
        fill(240);
        ellipse(100,100,100,100);
        break;
        
        case "O":
        console.log("D6");
        fr = 1174.66;
        fill(240);
        ellipse(100,100,100,100);
        break;

        case "0":
        console.log("D#6");
        fr = 1244.51;
        fill(240);
        ellipse(100,100,100,100);
        break;

        case "P":
        console.log("E6");
        fr = 1318.51;
        fill(240);
        ellipse(100,100,100,100);
        break;

        case "Z":
        console.log("C4");
        fr = 261.63;
        fill(240);
        ellipse(100,100,100,100);
        break;

        case "S":
        console.log("C#4");
        fr = 277.18;
        fill(240);
        ellipse(100,100,100,100);
        break;
        
        case "X":
        console.log("D4");
        fr = 293.66;
        fill(240);
        ellipse(100,100,100,100);
        break;

        case "D":
        console.log("D#4");
        fr = 311.12;
        fill(240);
        ellipse(100,100,100,100);
        break;

        case "C":
        console.log("E4");
        fr = 329.63;
        fill(240);
        ellipse(100,100,100,100);
        break;
        
        case "V":
        console.log("F4");
        fr = 349.23;
        fill(240);
        ellipse(100,100,100,100);
        break;

        case "G":
        console.log("F#4");
        fr = 370;
        fill(240);
        ellipse(100,100,100,100);
        break;

        case "B":
        console.log("G4");
        fr = 392;
        fill(240);
        ellipse(100,100,100,100);
        break;
        
        case "H":
        console.log("G#4");
        fr = 415.3;
        fill(240);
        ellipse(100,100,100,100);
        break;

        case "N":
        console.log("A4");
        fr = 440;
        fill(240);
        ellipse(100,100,100,100);
        break;

        case "J":
        console.log("A#4");
        fr = 466.16;
        fill(240);
        ellipse(100,100,100,100);
        break;
        
        case "M":
        console.log("B4");
        fr = 493.88;
        fill(240);
        ellipse(100,100,100,100);
        break;

    }

    osc.freq(fr);
    env.triggerAttack();
    var valSlider = slider.value();
    env.mult(valSlider);

}


function keyReleased(){
    env.triggerRelease();
    background(128);

}