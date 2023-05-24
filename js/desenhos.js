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