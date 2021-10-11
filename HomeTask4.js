function concatStrings(string, separator) {
    let arr = [];
    if(typeof separator !== 'string'){
      separator = '';
    }
      return function(nextString) {
    if (nextString === undefined) {
      return string;
    } else if (typeof nextString !== 'string'){
      return string;
    } else {
      arr.push(string);
      arr.push(nextString);
      return concatStrings(arr.join(separator), separator);
    }
  }
}

class Calculator {
  constructor(x, y) {
    if(x === undefined || y === undefined || !Number.isSafeInteger(x) || !Number.isSafeInteger(y)) {
      throw new Error('myError');
    } 
    this.x = x;
    this.y = y;
  }

  setX = (num) => {
    if (num === undefined || !Number.isSafeInteger(num)) {
      throw new Error('myError');
    }
    this.x = num;
  }

  setY = (num) => {
    if (num === undefined || !Number.isSafeInteger(num)) {
      throw new Error('myError');
    }
    this.y = num;
  }

  logSum = () => {
    return console.log(this.x + this.y); 
  }

  logMul = () => {
    return console.log(this.x * this.y); 
  }

  logSub = () => {
    return console.log(this.x - this.y); 
  }

  logDiv = () => {
    if(this.y === 0){
      throw new Error('myError');
    }
    return console.log(this.x / this.y);
  }
}