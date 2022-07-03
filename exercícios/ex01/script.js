function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 20
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora > 0 && hora <= 12) {
        // BOM DIA!
        img.src = 'media/manha.jpg'
        document.body.style.backgroundColor = 'orange'
    }
    else if (hora <= 18 && hora > 12)  {
        // BOA TARDE!
        img.src = 'media/tarde.jpg'
        document.body.style.backgroundColor = '#662400'
    }
    else {
        //BOA NOITE!
        img.src = 'media/noite.jpg'
        document.body.style.backgroundColor = '#011F26'

    }
}