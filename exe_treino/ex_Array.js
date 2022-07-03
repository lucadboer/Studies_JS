var vet = [10, 2, 54, 69, 87, 40]

for (var i = 0; i < vet.length; i++) {
    console.log(`O vetor na posição ${i} tem o valor de: ${vet[i]}`)    
}

for (var obj in vet) {
    console.log(`${vet[obj]}`);
}

vet.push(5)

vet.forEach(element => {
    console.log(`Jeitinho do foreach: ${element}`)
});

console.log(`O valor 87 está na posição ${vet.indexOf(87)}`)

console.log(vet.sort());