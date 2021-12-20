var agora = new Date()
var hora = agora.getHours
console.log(`Agora é ${hora}horas`)
if(hora >= 6 && hora < 12){
    console.log(`bom dia!`)
}else{
    if (hora <=18){
        console.log(`boa tarde!`)
    }else if (hora <=0){
        console.log(`boa noite!`)
    }else{
        console.log(`boa madrugada`)
    }
}
