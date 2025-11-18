// Given an integer n, return a counter function.
// This counter function initially returns n and then returns 1 
// more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

let counter = function(n){

    return function(){
        return n++
    }
}
let a= counter(10)
console.log(a())
console.log(a())
console.log(a())
console.log(a())

let b= counter()
console.log(b())

// 1. The n inside counter(n) is NOT increasing after the function returns.

// The outer function finishes, but…

// 2. A COPY of that n is saved inside the closure of the inner function.

// This closure n is the one that keeps increasing.