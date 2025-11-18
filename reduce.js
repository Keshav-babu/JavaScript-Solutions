var reduce=function(arr=[],fn,init){
    let output=init;

    for(let i=0;i<arr.length;i++){
        output = fn(output,arr[i])
    }


    return output
}