var vet = []
var num = document.getElementById('fNum')
var tabela = document.getElementById('selnum')
var res = document.getElementById('res')
num.focus()

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else{
        return false
    }

}

function inLista(n, lista) {
    if (lista.indexOf(Number(n)) != -1) {
        return true
    }
    else {
        return false
    }
}

function adicionar() {
    if (num.value.length == 0) {
        window.alert('Preencha os dados corretamente')
        num.focus() 
    } 
    else {
        if (isNum(num.value) && !inLista(num.value, vet)) {
        vet.push(Number(num.value))
        var n = num.value
        var item = document.createElement('option')
        item.text += `Valor ${n} adicionado`
        tabela.appendChild(item)
        }
        else {
            window.alert('Número inválido pelas regras ou já contente na lista')
        }
        num.value = ''
        num.focus()
    }
}

function finalizar() {
    window.alert('OLLLLLAAAAA')
    if (vet.length == 0) {
        window.alert('Digite os dados antes de continuar')
    }
    else {
        var maior = vet[0]
        var menor = vet[0]
        var soma = 0
        var media = 0

        /*var maior_numero = Math.max.apply(null, numeros); // Obtém o maior número do array numeros 
        var menor_numero = Math.min.apply(null, numeros); // Obtém o menor número do array numeros*/

        for (var pos in vet) {
            soma += vet[pos]
    
            if (vet[pos] > maior) {
                maior = vet[pos]
            } 
            if (vet[pos] < menor){
                menor = vet[pos]
            }
        }

        media = soma / vet.length
        res.innerHTML = ''
        res.innerHTML = `Ao todo temos ${vet.length} números na lista.`
        res.innerHTML += `<p>O maior valor cadastrado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor cadastrado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos números cadastrados foi de ${soma}.</p>`
        res.innerHTML += `<p>A media dos números cadastrados foi de ${media}.</p>`
        

    }
}