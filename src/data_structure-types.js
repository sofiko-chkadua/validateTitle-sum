const validateTitle = (title) => {
  if (typeof title !== 'string') {
    return 'Incorrect input data'
  }
  
  if (title.length > 20) {
    return 'INVALID'
  }
    if (title.length < 2) {
          return 'INVALID'
    }
    
    if (title[0].toUpperCase() !== title[0]) {
      return 'INVALID'
    }

  return "VALID";
}

const sum = (value1, value2) => {
  let value1Num = parseInt(value1);
  if (value2 % 3 == 0 && value2 % 5 == 0 && value2 % 15 == 0) {
    value2 *= -1;
  }
  return value2 + value1Num;
};


module.exports = {
  validateTitle,
  sum,
};
