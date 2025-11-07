let body = document.body
let lua = document.getElementById('lua')
let sol = document.getElementById('sol')
let fixar = document.getElementById('fixar')
let menuzinho = document.getElementById('menuzinho')
let linksMenu = document.querySelectorAll('.linksMenu')
let paragrafos = document.querySelectorAll('.paragrafos')
let btnLeiaMais = document.getElementById('btnLeiaMais')
let btnLeiaMais2 = document.getElementById('btnLeiaMais2')
let hrFooter = document.getElementById('hrFooter')
let nomeFooter = document.getElementById('nomeFooter')

lua.addEventListener('click', () => {
    lua.classList.add('ativoMoon')
    sol.classList.remove('ativoSun')

    body.classList.add('dark')
    body.classList.remove('leight')

    fixar.classList.add('dark')
    fixar.classList.remove('leight')

    menuzinho.classList.add('menuzinhoDark')
    menuzinho.classList.remove('menuzinhoLeight')

    linksMenu.forEach(linksMenu => {
        linksMenu.classList.add('linksMenuDark')
    })

    paragrafos.forEach(paragrafos => {
        paragrafos.classList.add('paragrafosDark')
    })
    
    btnLeiaMais.classList.add('btnLeiaMaisDark')
    btnLeiaMais2.classList.add('btnLeiaMaisDark')
    btnLeiaMais2.classList.remove('btnLeiaMaisLeight')
    btnLeiaMais.classList.remove('btnLeiaMaisLeight')

    hrFooter.classList.add('hrDark')
    hrFooter.classList.remove('hrLeight')

    nomeFooter.classList.add('copyDark')
    nomeFooter.classList.remove('copyLeight')
})

sol.addEventListener('click', () => {
    sol.classList.add('ativoSun')
    lua.classList.remove('ativoMoon')

    body.classList.add('leight')
    body.classList.remove('dark')
    
    fixar.classList.add('leight')
    fixar.classList.remove('dark')
    
    menuzinho.classList.add('menuzinhoLeight')
    menuzinho.classList.remove('menuzinhoDark')

    linksMenu.forEach(linksMenu => {
        linksMenu.classList.remove('linksMenuDark')
    })

    paragrafos.forEach(paragrafos => {
        paragrafos.classList.remove('paragrafosDark')
    })
        
    btnLeiaMais.classList.add('btnLeiaMaisLeight')
    btnLeiaMais2.classList.add('btnLeiaMaisLeight')
    btnLeiaMais2.classList.remove('btnLeiaMaisDark')
    btnLeiaMais.classList.remove('btnLeiaMaisDark')

    hrFooter.classList.add('hrLeight')
    hrFooter.classList.remove('hrDark')

    nomeFooter.classList.add('copyLeight')
    nomeFooter.classList.remove('copyDark')
})

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
        btn.innerHTML = '<br>Esconder'
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
        btn.innerHTML = '<br>Esconder'
    }
}

function mais5() {
    let pontos = document.getElementById('pontinhos5')
    let maisTexto = document.getElementById('leiaMais5')
    let btn = document.getElementById('btnLeiaMais5')

    if (pontos.style.display === 'none') {
        pontos.style.display = 'inline'
        maisTexto.style.display = 'none'
        btn.innerHTML = 'Leia Mais'
    } else {
        pontos.style.display = 'none'
        maisTexto.style.display = 'inline'
        btn.innerHTML = '<br>Esconder'
    }
}

function mais6() {
    let pontos = document.getElementById('pontinhos6')
    let maisTexto = document.getElementById('leiaMais6')
    let btn = document.getElementById('btnLeiaMais6')

    if (pontos.style.display === 'none') {
        pontos.style.display = 'inline'
        maisTexto.style.display = 'none'
        btn.innerHTML = 'Leia Mais'
    } else {
        pontos.style.display = 'none'
        maisTexto.style.display = 'inline'
        btn.innerHTML = '<br>Esconder'
    }
}

// atualizar idade
function atualizarIdade() {
    let dataNascimento = new Date('1999-01-14')
    let agora = new Date()
    let idade = agora.getFullYear() - dataNascimento.getFullYear()
    dataNascimento.setFullYear(agora.getFullYear())
    if (agora < dataNascimento) {
        idade--;
    }
    document.getElementById('idade').textContent = idade;
}
atualizarIdade();
setInterval(atualizarIdade, 100);

// atualizar corpy
let data = new Date
let anoAtual = data.getFullYear()
let corpy = document.getElementById('corpy').textContent = anoAtual