function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }

    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 12) {
                //CRIAÇA
                img.setAttribute('src', 'crianca-menino.png')
            }

            else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'adolescente-menino.png')
            }

            else if (idade < 65) {
                //ADULTO
                img.setAttribute('src', 'homem-adulto.png')
            }

            else {
                //VELHO
                img.setAttribute('src', 'homem-idoso.png')
            }

        }
        else {
            genero = 'mulher'
            if (idade >= 0 && idade < 12) {
                //CRIAÇA
                img.setAttribute('src', 'crianca-menina.png')
            }

            else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'adolescente-menina.png')
            }

            else if (idade < 65) {
                //ADULTO
                img.setAttribute('src', 'mulher-adulto.png')

            }
            else {
                //VELHO
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade} anos`
        res.appendChild(img)
        
    }
}