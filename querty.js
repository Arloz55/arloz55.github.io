var osc, env, modulator, env;
var freq = 220;

var modMaxFreq =112;
var modMinFreq = 0;
var modMaxDepth = 150;
var modMinDepth = -150;

var x=60;
var button;
var sel;

function setup(){

    createCanvas(100, 100);
    background(0);
    button = createButton('Up');
    button.position(19, 19);
    button.mousePressed(octaveUp);

    createCanvas(100, 100);
    background(0);
    button = createButton('Down');
    button.position(19, 50);
    button.mousePressed(octaveDown);

    textAlign(CENTER);
    background(200);
    sel = createSelect();
    sel.position(19, 80);
    sel.option('triangle');
    sel.option('square');
    sel.option('sine');
    sel.changed(oscChange);

//Carrier
    osc = new p5.Oscillator('sine');
    osc.amp(0);
    osc.freq(freq);
    osc.start();

//square, sine, triangle
modulator = new p5.Oscillator('sine');
modulator.freq(25);
modulator.amp(50);
modulator.start(); 

modulator.disconnect();
osc.freq(modulator);

env = new p5.Env();

//Attack, Decay, Sustain, Release
env.setADSR(0.001,0.5,0.1,0.5);
//AttackLevel, ReleaseLevel
env.setRange(1,0);

}

function oscChange() {
    var newType = sel.value();
    osc.setType(newType);
  }

function draw(){
//map mouse Y
var modFreq = map(mouseY, height, 0, modMinFreq, modMaxFreq);
modulator.freq(freq);

//Change amplitud of the modulator
var modDepth = map(mouseX,0,width, modMinDepth, modMaxDepth);
modulator.amp(modDepth);

}

function octaveUp(){
    x+=12;
}

function octaveDown(){

    x-=12;
}

function keyPressed(){
    freq=0;

    switch(key){
        case 'Q':
        freq=midiToFreq(x);
        break;
        case '2':
        freq=midiToFreq(x+1);
        break;
        case 'W':
        freq=midiToFreq(x+2);
        break;
        case '3':
        freq=midiToFreq(x+3);
        break;
        case 'E':
        freq=midiToFreq(x+4);
        break;
        case '4':
        freq=midiToFreq(x+5);
        break;
        case 'R':
        freq=midiToFreq(x+6);
        break;
        case '5':
        freq=midiToFreq(x+7);
        break;
        case 'T':
        freq=midiToFreq(x+8);
        break;
        case '6':
        freq=midiToFreq(x+9);
        break;
        case 'Y':
        freq=midiToFreq(x+10);
        break;
        case '7':
        freq=midiToFreq(x+11);
        break;
        case 'U':
        freq=midiToFreq(x+12);
        break;
    }
    osc.freq(freq);
    env.triggerAttack(osc);
    console.log("freq "+ freq);
    env.play(osc);
}

function keyReleased(){
    env.triggerRelease(osc);
}