// How do you find the missing number in a given integer array of 1 to 100? 

function findMissingNumber(arrInput){
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
    // find missing number
    let result = [];
    for(i= 0; i < arrInput.length; i++){
        if(arrInput[i+1]-arrInput[i] != 1 ){
            let c =arrInput[i]+1;
            let tmp = arrInput[i+1];
            while(c<tmp ){
                result.push(c);
                c = c+1;
            }
        }
    }
    return result;
}
console.log('Numbers miss : ' + findMissingNumber([1,3,8,6]));