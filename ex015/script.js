function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') //aquele input em "ano de nascimento" no HTML 
    var res = document.querySelector('div#res')
    if (fano.value.length === 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       res.innerHTML = `idade calculada: ${idade}` //pra testar a lógica e o funcionamento
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto') //o mesmo que ir ao HTML e colocar <div id="foto></div>"
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebe-h.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-h.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-h.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-h.png')
            }

        } else if (fsex[1].checked){
            gênero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebe.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos` //pra testar também
        res.appendChild(img)
    }
}
