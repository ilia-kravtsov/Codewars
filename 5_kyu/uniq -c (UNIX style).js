// uniq -c (UNIX style)

/*
Implement a function which behaves like the 'uniq -c' command in UNIX.

It takes as input a sequence and returns a sequence in which all duplicate elements following each other have been reduced to one instance together with the number of times a duplicate elements occurred in the original array.
*/

function uniq_c(a){
    let result = []
    for (let i = 0; i < a.length; i++) {
        let count = 1;
        while (a[i] === a[i+1]) {
            count++
            i++;
        }
        result.push([a[i],count])
    }
    return result
}