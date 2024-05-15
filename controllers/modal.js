const modal = {
    textoResultadoImc: document.querySelector('h2'),
    containerModal: document.querySelector('.container-modal'),
    formModal: document.querySelector('#formModal'),

    open() {
        modal.containerModal.classList.remove('hide')
    },
    fecharModal() {
        modal.containerModal.classList.add('hide')
    }
}

const calculandoIMC = (peso, altura) => {
    return (peso / ((altura / 100) ** 2)).toFixed(2)
}

export const abrirModal = (peso, altura) => {
    modal.open()
    if (calculandoIMC(peso, altura) < 43 && calculandoIMC(peso, altura) > 15) {
        modal.textoResultadoImc.style.color='#363E41';
        modal.textoResultadoImc.innerHTML = `O seu IMC é de ${calculandoIMC(peso, altura)}`
    } else {
        modal.textoResultadoImc.style.color='#D23E43';
        modal.textoResultadoImc.innerHTML = 'Valores inválidos.'
    }

}

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.fecharModal()
    }
})


export { modal }