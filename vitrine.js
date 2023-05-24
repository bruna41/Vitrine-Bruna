function mais() {
    let pontos = document.getElementById('pontinhos')
    let maisTexto = document.getElementById('leiaMais')
    let btn = document.getElementById('btnLeiaMais')

    if (pontos.style.display === 'none') {
        pontos.style.display = 'inline'
        maisTexto.style.display = 'none'
        btn.innerHTML = 'Leia Mais'
    } else {
        pontos.style.display = 'none'
        maisTexto.style.display = 'inline'
        btn.innerHTML = 'Esconder'
    }
}

function mais2() {
    let pontos = document.getElementById('pontinhos2')
    let maisTexto = document.getElementById('leiaMais2')
    let btn = document.getElementById('btnLeiaMais2')

    if (pontos.style.display === 'none') {
        pontos.style.display = 'inline'
        maisTexto.style.display = 'none'
        btn.innerHTML = 'Leia Mais'
    } else {
        pontos.style.display = 'none'
        maisTexto.style.display = 'inline'
        btn.innerHTML = 'Esconder'
    }
}

function mais3() {
    let pontos = document.getElementById('pontinhos3')
    let maisTexto = document.getElementById('leiaMais3')
    let btn = document.getElementById('btnLeiaMais3')

    if (pontos.style.display === 'none') {
        pontos.style.display = 'inline'
        maisTexto.style.display = 'none'
        btn.innerHTML = 'Leia Mais'
    } else {
        pontos.style.display = 'none'
        maisTexto.style.display = 'inline'
        btn.innerHTML = 'Esconder'
    }
}

function mais4() {
    let pontos = document.getElementById('pontinhos4')
    let maisTexto = document.getElementById('leiaMais4')
    let btn = document.getElementById('btnLeiaMais4')

    if (pontos.style.display === 'none') {
        pontos.style.display = 'inline'
        maisTexto.style.display = 'none'
        btn.innerHTML = 'Leia Mais'
    } else {
        pontos.style.display = 'none'
        maisTexto.style.display = 'inline'
        btn.innerHTML = 'Esconder'
    }
}

// atualizar idade
let idadeSpan = document.getElementById('idade')
let data = new Date()
let dia = String(data.getDate())
let mes = String(data.getMonth() + 1)
let hora = String(data.getHours())
let minutos = String(data.getMinutes())
let segundos = String(data.getSeconds())

const updateIdade = () => {
    idadeSpan.innerHTML = idade
}

let idade = 24
    while (dia == 23 && mes == 5 && hora == 10 && minutos == 47 && segundos == 1) {
        // idade += 1
        // updateIdade()
        console.log(idade)
    }