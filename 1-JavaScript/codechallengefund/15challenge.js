// Write your function here:

const toEmoticon = (emotion) => {
    if (emotion === 'shrug'){
      return '|_{"}_|';
    } else if (emotion === 'smiley face'){
      return ':)' ;
    } else if (emotion === 'frowny face'){
      return ':(' ;
    } else if (emotion === 'winky face'){
      return ';)' ;
    }else if (emotion === 'heart'){
      return '<3' ;
    }else {
      return '|_(* ~ *)_|';
    }
  }
  
  
  // Uncomment the line below when you're ready to try out your function
  console.log(toEmoticon("whatever")) 
  //Should print  '|_(* ~ *)_|'
  
  // We encourage you to add more function calls of your own to test your code!
  console.log(toEmoticon("heart")) ;
  console.log(toEmoticon("shrug")) ;
  console.log(toEmoticon("smiley face")) 
  
  
  