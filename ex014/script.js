function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = 9 se quiser forçar pra testar o funcionamento em horários diferentes
    var hora = data.getHours() //isso serve para mostrar a hora do sistema (e usá-la em alguma coisa, como foi feito abaixo)
    msg.innerText = `Agora são ${hora} horas.` //você precisa "pegar" o elemento porque ele não foi criado aqui
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'fotos/manha.r.png' //img de lá de cima
        document.body.style.background = '#e0ded8'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'fotos/tarde.r.png'
        document.body.style.background = '#b2a989'
    } else {
        //boa noite
        img.src = 'fotos/noite.r.png'
        document.body.style.background = '#58315b'
    }
}
