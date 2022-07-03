function fatoriar(n) {
    fat = 1
    if (n == 1) {
        return 1
    } 
    else {
        return n * fatoriar(n-1)
    }
   /* for (let c = n; c > 1; c--) {
        fat *= c 
    }
    return fat */   
}
console.log(fatoriar(5));

function parimpar(obj) {
    var res
    if (obj % 2 == 0) {
        res = console.log(`O número ${obj} é par`);
    } 
    else {
        res = console.log(`O número ${obj} é impar`);
    }
}

console.log(parimpar(2))