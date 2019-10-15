//How do you reverse an array
function reverseArr(arrInput,start,end){
    if (start > end) 
    return; 
    let temp = arrInput[start];  
    arrInput[start] = arrInput[end]; 
    arrInput[end] = temp; 
    // Recursive Function calling 
    reverseArr(arrInput, start + 1, end - 1);
}

let arr = [1,2,3,3,8,9,7];
console.log(`Array input : ${arr}`);
reverseArr(arr,0,arr.length -1);
console.log(`Reversed array is : ${arr}`);