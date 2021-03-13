let digitalRoot = (n) => {
  
  let sum = 0;
  while(parseInt(n) > 0){
    let temp = n % 10;
    sum = sum + temp;
    n = parseInt(n / 10);
  }
  
 
  if(sum < 10){
    return sum;
  }
 
  //call the function again
  return digitalRoot(sum);
}

console.log(digitalRoot(257520643)); 
console.log(digitalRoot(5674));      
console.log(digitalRoot(493193));    
console.log(digitalRoot(34758));     
