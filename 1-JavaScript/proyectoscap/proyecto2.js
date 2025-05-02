let raceNumber = Math.floor(Math.random() * 1000);
let registerEarly = false;
let runnerAge = 15;

if (runnerAge > 18 && registerEarly=== true){
  raceNumber+=1000;
}

if  (runnerAge > 18 && registerEarly === true ){
  console.log(`race start at 9:30Am number ${raceNumber}`);
} else if (runnerAge > 18 && registerEarly === false){
  console.log(`race stars's at 11:00am number ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`race stars's at 12:30pm number ${raceNumber}`)
} else {
  console.log('Go to registration desk')
}