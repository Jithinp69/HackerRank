/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
Print the decimal value of each fraction on a new line with  places after the decimal.
*/

plusMinus = () => {
    arr = [3,4,-1,0,5,-2];
    arrP = [];
    arrN = [];
    arrZ = [];
    
    for(let i=0;i<arr.length;i++){
        // console.log(arr[i]);
        if(arr[i] > 0){
            arrP.push(arr[i]);
        } else if(arr[i]<0){
            arrN.push(arr[i]);
        }else {
            arrZ.push(arr[i]);
        }
    }
    // console.log(arrP);
    // console.log(arrN);
    // console.log(arrZ);

    let ratioOfP = arrP.length/arr.length;
    let ratioOfN = arrN.length/arr.length;
    let ratioOfZ = arrZ.length/arr.length;

    console.log(ratioOfP);
    console.log(ratioOfN);
    console.log(ratioOfZ);

}
plusMinus();