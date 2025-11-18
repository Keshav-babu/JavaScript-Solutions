// https://leetcode.com/problems/to-be-or-not-to-be/description/?envType=study-plan-v2&envId=30-days-of-javascript


var expect = function(val) {
    return {
        toBe: function(other) {
            if (val === other) {
                return true;
            }
            throw new Error("Not Equal");
        },

        notToBe: function(other) {
            if (val !== other) {
                return true;
            }
            throw new Error("Equal");
        }
    };
};

let test=expect(10)
try {
    let b = test.notToBe(10);
    console.log("b =", b);
} catch (err) {
    console.log("b error:", err.message);
}

try {
    let c = test.notToBe(11);
    console.log("c =", c);
} catch (err) {
    console.log("c error:", err.message);
}

try {
    let d = test.toBe(10);
    console.log("d =", d);
} catch (err) {
    console.log("d error:", err.message);
}

try {
    let e = test.toBe(11);
    console.log("e =", e);
} catch (err) {
    console.log("e error:", err.message);
}



