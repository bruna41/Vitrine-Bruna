let fotosDesenho = document.querySelectorAll('.fotoDesenho')

fotosDesenho.forEach(fotoDesenho => {
    fotoDesenho.addEventListener('click', () => {
        if (fotoDesenho.classList.contains('expandir')) {
            fotoDesenho.classList.remove('expandir')
            fotoDesenho.style.transition = '1.5s'
            fotoDesenho.style.cursor = 'zoom-in'
        } else {
            fotoDesenho.classList.add('expandir')
            fotoDesenho.style.cursor = 'zoom-out'
        }
    })
    
})

// atualizar corpy
let data = new Date
let anoAtual = data.getFullYear()
let corpy = document.getElementById('corpy').textContent = anoAtual