// Write your function here:
const finalGrade = (num1 ,num2 ,num3) =>{
    if (num1 < 0 || num2 < 0 || num3 < 0 || num1 > 100 || num2 > 100 || num3 > 100 ){
      return 'You have entered an invalid grade.';
    }
    const mean = ((num1+num2+num3)/3);
    switch (true) {
      case mean >= 0 && mean <= 59:
        return 'F';
        break;
      case mean >= 60 && mean <= 69:
        return 'D';
        break;
      case mean >= 70 && mean <= 79:
        return 'C';
        break;
      case mean >= 80 && mean <= 89:
        return 'B';
        break;
      case mean >= 90 && mean <= 100:
        return 'A';
        break;
      default:
        return 'You have entered an invalid grade.'
    }
    }
  
  
  // Uncomment the line below when you're ready to try out your function
  console.log(finalGrade(99, 92, 95)) // Should print 'A'
  
  // We encourage you to add more function calls of your own to test your code!
  console.log(finalGrade(100, 92, 95)) // Should print 'A'
  console.log(finalGrade(20, 40, 50)) // Should print 'F'
  console.log(finalGrade(101, 92, 95)) // Should print 'Error'
  
  
  