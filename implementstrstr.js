//Objective is to see whether a string is a substring of another and 
//return the first index of the larger string that the smaller string
//is found. If it doesn't exist return -1

let haystack = 'hello'
let needle = 'll'


//O(n) solution that iterates over the haystack to find the needle.

if ((!haystack && !needle) || (haystack && !needle)) {
    return 0
}

let n = haystack.length 
let l = needle.length 

//We only have to iterate up to n - l + 1 since that's the last index
//where the needle can fit.
for (let i = 0; i < n - l + 1; i++) {
    if (haystack.substring(i, i + l) === needle) {
        return i
    }
}

return -1