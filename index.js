// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `On Saturdays, I like to ${activity}!`;
  }
  function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  module.exports = saturdayFun; 
 function mondayWork(task = 'go to the office') {
    return `On Mondays, I need to ${task}!`;
  }
  function mondayWork(task = 'go to the office') {
    return `This Monday, I will ${task}.`;
  }
  
  module.exports = {
    saturdayFun: saturdayFun,
    mondayWork: mondayWork
  };
  function wrapAdjective(flair = "*") {
    return function (adjective) {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  module.exports = {
    saturdayFun: saturdayFun,
    mondayWork: mondayWork,
    wrapAdjective: wrapAdjective
  };
  