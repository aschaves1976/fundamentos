function rand([min = 0, max = 1000]){
// se o valor minimo for maior que o maximo, entao min recebe valor maximo e o maximo recebe o valor minimo
    if (min > max) [min, max] = [max, min]

    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50,40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))