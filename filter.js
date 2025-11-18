function filter(arr=[],fnc=()=>{}){
    let output = new Array()
    for(let i=0;i<arr.length;i++){
        if(fnc(arr[i])){
            output.push(arr[i])
        }
    }

    return output
}

let test = filter([1,2,3,5,6],(i)=>i-1)
console.log(test)