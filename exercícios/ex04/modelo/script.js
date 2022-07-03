function GerarTabuada() {
    var ftxtnum = document.getElementById('txtnum')
    var res = document.getElementById('res')

    if (ftxtnum.value.length == 0) {
        window.alert('O campo não foi preenchido')
        res.innerHTML = ''
    } 
    else {
        res.innerHTML = ''
        var num = Number(ftxtnum.value)
        for (let i = 0; i <= 10; i++) {
            res.innerHTML += `${num} x ${i} = ${num * i}<br>`
        }
    }

}