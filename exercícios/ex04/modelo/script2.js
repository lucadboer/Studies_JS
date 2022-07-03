function GerarTabuada() {
    var ftxtnum = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')

    if (ftxtnum.value.length == 0) {
        window.alert('O campo não foi preenchido')
    } 
    else {
        var num = Number(ftxtnum.value)
        window.alert(num)
        tab.innerHTML = ''
        for (let i = 0; i <= 10; i++) {
            var item = document.createElement('option')
            item.text = `${num} x ${i} = ${num * i}`
            tab.appendChild(item)
        }
    }

}