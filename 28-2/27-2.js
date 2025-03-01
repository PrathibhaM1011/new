PROGRAMS


//Q-1
function findLarge(num1,num2,callback){
    return callback (num1,num2)+5;
  }
  var res=findLarge(12,20,(num1,num2)=>{
      if (num1>num2){
          return num1
      }
          return num2
  })
  console.log(res);
  
  // Q-2
  function calculate(num1, num2, callback){
      return callback (num1,num2)*3  ;  
  }
  var res=calculate(10,5,(num1,num2)=>{
      if(num1>num2){
          return num1+num2;
      }
      else if(num2 > num1){
          return num2-num1;
      }
      else if(num1==num2){
          return 0;
      }
  })
  console.log(res);


  // Q-3
  function checkEvenOdd(num, callback){
      return callback(num);
  }
  var res=checkEvenOdd(8,(num)=>{
      if(num%2==0){
          return "Given Number is Even";
      }
      return "Given Number is Odd";
  })
  console.log(res);


  // Q-4
  function checkSign(num, callback){
      return callback(num);
  }
  var res = checkSign(-10,(num)=>{
      if(num>0){
          return "positive";
      }
      else if(num<0){
          return "Negative Value";
      }
      else if(num===0){
          return "Zero"
      }
  })
  console.log(res);


  // Q-5
  function multiplyConditionally(num1, num2, callback){
      return callback (num1,num2)*4;
  }
  var res= multiplyConditionally(4,6,(num1,num2)=>{
      if(num1>num2){
          return num1*num2;
      }
      else if(num2>num1){
          return num1+num2;
      }
      else if(num1 == num2){
          return num1;
      }
  })
  console.log(res);
