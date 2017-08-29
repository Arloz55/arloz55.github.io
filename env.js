var env;

env = new p5.Env();

//Attack, Decay, Sustain, Release
env.setADSR(0.001,0.5,0.1,0.5);
//AttackLevel, ReleaseLevel
env.setRange(1,0);