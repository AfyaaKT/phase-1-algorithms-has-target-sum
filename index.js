function hasTargetSum(array, target) {
  for(let i = 0 ; i < array.length; i++){
    // console.log('i = ',i);
    for(let j = i + 1 ;j < array.length ; j++ ){
      // console.log('j = ',j);
      let sum =array[i] + array[j] 
      // console.log('array[i] = ',array[i],' array[j]= ',array[j],'sum = ',sum);
      if(sum === target){
        return true
      }
     

    }
    
  }
  return false
  }
console.log(hasTargetSum([4,9,7],6));

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  loop over the array and compare each item with each other 
  if the summation of them = target 
  return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
