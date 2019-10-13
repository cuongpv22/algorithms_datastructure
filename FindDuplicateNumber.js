//How do you find the duplicate number on a given integer array
function findDuplicate(arrInput){
     // Sort arrInput
     for( i = 0;i < arrInput.length; i++){
        for(j = 0; j < arrInput.length;j++){
            let tmp ;
            if(arrInput[j] > arrInput[j+1]){
                tmp =  arrInput[j] ;
                arrInput[j] = arrInput[j+1];
                arrInput[j+1] = tmp;
            }
        }
    }
    console.log(`After sort :  ${arrInput}` );
    for(i = 0; i <arrInput.length;i++){
        if(arrInput[i+1] - arrInput[i] == 0){
            arrInput.splice(i,i+1);
        }
    }
    console.log(arrInput);
}
console.log(findDuplicate([1,2,3,3,8,9,7]));