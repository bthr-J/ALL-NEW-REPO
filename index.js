// function fizzbuzz(inputNumber){
//   if(inputNumber % 15 == 0){
//     console.log('fizzbuzz');
//   }else if(inputNumber % 5 ==0){
//     console.log('buzz');
//   }else if(inputNumber % 3 == 0){
//     console.log('fizz');
//   }
// }

// fizzbuzz(15);



function fizzbuzzmap(arr){
  var inputArr = arr;
  inputArr.map(Element => {
    if(Element % 15 == 0){
      console.log('fizzbuzz');
    }else if(Element % 5 ==0){
      console.log('buzz');
    }else if(Element % 3 == 0){
      console.log('fizz');
    }else{
      console.log(Element);
    }
  })
}

fizzbuzzmap([1,3,5,8,15]);

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}