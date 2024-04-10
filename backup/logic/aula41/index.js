function max(x, y){
    if(x > y){
        return `${x} é maior`
    } else {
        return `${y} é menor`
    }
}

console.log(max(10, 1));

//REFATORADO

const max2 = (a, b) => a >= b ? a : b;

console.log(max2(100, 20));
