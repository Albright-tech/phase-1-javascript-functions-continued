// code your solution here
function saturdayFun(activity) {
    if (activity === undefined) {
      return 'This Saturday, I want to roller-skate!';
    } else {
      return `This Saturday, I want to ${activity}!`;
    }
  }
  
  function mondayWork(task) {
    if (task === undefined) {
      return 'This Monday, I will go to the office.';
    } else {
      return `This Monday, I will ${task}.`;
    }
  }
  
  function wrapAdjective(flair = '*') {
    return function (adjective) {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
 
  
  