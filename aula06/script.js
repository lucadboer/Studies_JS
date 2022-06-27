
var nome = window.prompt('Qual é o seu nome?') // pergunta o nome

if (nome == 'Luca') {
    window.alert('ok, pode entrar ' + nome)
}
else {
    window.alert('seu nome não está na lista')
}

// var n1 = Number.parseInt(window.prompt('Digite um número'))
// var n2 = Number.parseInt(window.prompt('Digite outro número'))

var n1 = Number(window.prompt('Digite um número'))
var n2 = Number(window.prompt('Digite outro número'))

var soma = n1 + n2

window.alert(`A soma dos valores é ${soma}`)