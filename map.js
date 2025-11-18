function map(arr=[],fnc=()=>{}){
    let outputarr=[]
    for(let i=0;i<arr.length;i++){
        outputarr[i]=fnc(arr[i])
    }
    return outputarr
}

let test=map([1,2,3,4],(i)=>++i)

console.log(test)

