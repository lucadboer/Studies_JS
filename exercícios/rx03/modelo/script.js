function contar() {
    var res = document.getElementById('res')
    var fInicio = document.getElementById('nInicio')
    var fFim = document.getElementById('nFim')
    var passo = document.getElementById('passo')

    if (fInicio.value.length == 0 || fFim.value.length == 0 || passo.value.length == 0) {
        window.alert('Preencha todos os campos!') 
    }
    else { 
        var n1 = Number(fInicio.value)
        var n2 = Number(fFim.value)
        var passos = Number(passo.value)

        if (passos <= 0) {
            res.innerHTML  = 'Impossível contar'
            window.alert('O passo tem que ser MAIOR que 0')
        }
        else {
            res.innerHTML = 'Contando:'
              if (n1 < n2) {
          /*  while (n1 <= n2) {
                res.innerHTML += ` ${n1} -`
                n1 += passos
            }

            res.innerHTML += `\u{1F3C1}` 
            
            n1 = Number(fInicio.value) */
    
            for (var i = n1; i <= n2; i += passos){
                res.innerHTML += ` ${i} \u{1F449}`
            }
        }
        else {
            for (var i = n1; i >= n2; i -= passos) {
                res.innerHTML += ` ${i} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}` 

        }
        
    }
}