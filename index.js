var colors = require('colors'),
    moment = require('./moment.js'),
    play = require('play'),
    input = require('prompt'),
    sound = 'tone.wav',
    soundIsOn,
    alarmSet=false,
    setAlarm;
init();

function init(){
  console.log("Please set the alarm.".red);
  console.log("FORMAT: hh:mm:ss");
  input.start();
  input.get(['Time', 'AMPM'], function(err,result) {
    setAlarm = result.Time+' '+result.AMPM;
    console.log("Set time to "+setAlarm);
    alarmSet = true;
  });
  if (alarmSet) {
    setInterval(250,updateTime);
  }
}

function updateTime(){
  time = moment().format('hh:mm:ss a');
  console.log(time);
  checkTime();
}

function checkTime(){
  if (soundIsOn==false) {
    if(time==setAlarm) {
      playAlarm();
    }
  }
  else{

  }
}

function playAlarm(){
  soundIsOn=true;
  while(soundIsOn==true){
    setInterval(500, play.sound(sound));
  }
}

if (alarmSet) {
  setInterval(250,updateTime);
}
