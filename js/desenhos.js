let fotosDesenho = document.querySelectorAll('.fotoDesenho')

fotosDesenho.forEach(fotoDesenho => {
    fotoDesenho.addEventListener('click', () => {
        removeExpansao()
        fotoDesenho.classList.add('expandir')
    })
    
})

function removeExpansao() {
    fotosDesenho.forEach(fotoDesenho => {
        fotoDesenho.classList.remove('expandir')
    })
}

// atualizar corpy
let data = new Date
let anoAtual = data.getFullYear()
let corpy = document.getElementById('corpy').textContent = anoAtual