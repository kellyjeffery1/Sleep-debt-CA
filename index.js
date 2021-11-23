const getSleepHours = day => {
    // const getSleepHours.toLowerCase();
    if (day === 'monday') {
      return 8;
    } else if(day === 'monday') {
       return 8;
    } else if(day === 'tuesday') {
       return 4;
    } else if(day === 'wednesday') {
       return 8;
    } else if(day === 'thursday') {
       return 5;
    } else if(day === 'friday') {
       return 8;
    } else if(day === 'saturday') {
       return 3;
    } else if (day === 'sunday') {
      return 8;
    }
    else {
      return 'What day?';
    }
  };
  
  const getActualSleepHours = () => {
  return 
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday'); 
  };
  
  console.log(getSleepHours('monday'));
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7; 
  };
  
  console.log(getIdealSleepHours());
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      return console.log('You got the perfect amount of sleep');
    } else if(actualSleepHours > idealSleepHours) {
      return console.log('You got' + (idealSleepHours - actualSleepHours) + 'more hours sleep than was needed');
    } else if(actualSleepHours < idealSleepHours) {
      return console.log('You should get some more rest because you only got' + (idealSleepHours - actualSleepHours));
    } else {
      console.log('something went wrong :(')
    }
  };
  
  calculateSleepDebt();