// function that creates a closure and returns a function

function addNum(num) {

    return function (value) { //anonymous function
        value= +prompt('enter num:');
        let ans=console.log(num + value);
        return ans;
    }
  
  }
  
  let print= addNum(5);
  print();
  
  // -----------------------------------------------------------------------------------------
  
  // recursive function that searches an array
  
  function checkArray(userInput, arrayNum) {
    arrayNum = [0, 5, 10, 15, 20, 25];
    userInput = +prompt('Enter a value to search:');
  
    // loop to check
    for (i = 0; i <= arrayNum.length; i++) {
        if (userInput === arrayNum[i]) {
            console.log("True "+userInput + " found at index " + i);
            return true;
        }
    }
  
    console.log("False "+userInput + " not found in the array.");
    return false;
  
  }
  checkArray();
  
  // -----------------------------------------------------------------------------------------
  
  