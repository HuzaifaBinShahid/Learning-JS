const arr = [2, 7, 11, 15];

function twoSum(arr, target){

  const seen = new Map();
  
  for(let i = 0; i < arr.length; i++){
  
    let temp = arr[i];
    let needed = target - temp;

    if(seen.has(needed)){
      console.log([seen.get(needed), i]);
    } else {
    seen.set(temp,i)
    }
  }
}

twoSum(arr,26)