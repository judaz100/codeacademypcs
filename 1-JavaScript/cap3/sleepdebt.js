const getSleepHours = day => {
    switch (day) {
      case 'monday':
         return 10;
         break;
      case 'tuesday':
          return 10;
          break;
      case 'wednesday':
          return 10;
          break;
      case 'thursday':
          return 9;
          break;
      case 'friday':
          return 10;
          break;
      case 'saturday':
          return 10;
          break;
      case 'sunday':
          return 12;
          break;
      default:
        return 'Error';
    }
  };
  
  /*console.log(getSleepHours('monday'));
  console.log(getSleepHours('thrusday'));
  console.log(getSleepHours('saturday'));
  */

  const getActualSleepHours = () => (getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday'))
  console.log(getActualSleepHours())
  
  const getIdealSleepHours = (idealHours=8) => {
    //const idealHours = 6;
    return idealHours*7
  }
  
  //console.log(getIdealSleepHours())
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours =  getIdealSleepHours();
    if (actualSleepHours === idealSleepHours){
      console.log ('Your amount of sleep is perfect');
    }
    
    else if (actualSleepHours > idealSleepHours){
      console.log ('You slept more than ' + (actualSleepHours -idealSleepHours ) +' hours, recomended hours are 42 hours');
    }
    
    else if (actualSleepHours < idealSleepHours){
      console.log('You should get some rest, do you slept ' + (idealSleepHours - actualSleepHours) +' hours');
    }
    
    else {
      console.log ('Error');
    }
  }
  
 calculateSleepDebt();
  
  