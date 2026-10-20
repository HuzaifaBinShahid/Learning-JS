//------ Find the second largest unique number in an array without sorting it, while correctly handling duplicate values and using only one loop through the array -------//

const arr = [5, 5, 5]
function secondLargestValue(arr){
  let largest = 0;
  let secondLargest = 0;
  
  for(let i = 0; i < arr.length; i++){
    
    let temp = arr[i];

    if(temp > largest){
      secondLargest  = largest
      largest = temp
    } else if (temp < largest && temp > secondLargest){
      secondLargest = temp
    }
}

  console.log(largest)
  console.log(secondLargest)
}
secondLargestValue(arr)


//---- Solution using sorting and two loops but has more complexity ----//

// function secondLargest(arr){

//   for(let i = 0; i< arr.length; i++){
//   for (let j = 0; j< arr.length; j++){

//     if (arr[j] > arr[j+1]){
//       let temp = arr[j];
//       arr[j] = arr[j+1]
//       arr[j+1] = temp
//     }
//   }  
// }

//   let secondLargestNumber = 0;
  
//   if(arr[arr.length - 1] === arr[arr.length - 2]){
//      secondLargestNumber = arr[arr.length - 3];
//   } else {
//      secondLargestNumber = arr[arr.length - 2];
//   }
//   console.log(secondLargestNumber);
// }

//  secondLargest(arr);