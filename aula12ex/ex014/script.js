function carregar() {
    var msg = window.document.getElementById(`msg`)
    var img = window.document.getElementById(`imagem`)
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}horas.`
    if (hora >= 0 && hora < 12){
        //Bom Dia!
        img.src = 'img/fotomanha.png'
        document.body.style.background = '#8f939d'
    }else if (hora >= 12 && hora <= 18){
        //Boa Tarde!
        img.src = 'img/fototarde.png'
        document.body.style.background = '#653110'
    }else {
        //Boa Noite!
        img.src = 'img/fotonoite.png'
        document.body.style.background = '#031a3a'
    }
}

