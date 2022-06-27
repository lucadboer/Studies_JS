var res = document.getElementById('res')

function calc() {
    var n1 = document.getElementById('vel')
    vel = Number(n1.value)

    if (vel > 60) {
       res.innerHTML = 'Você está <strong>MULTADO</strong> por ultrapassar o limite de velocidade'
    } 
    else {
        res.innerHTML = 'Você está no limite correto de velocidade'
    }
}

