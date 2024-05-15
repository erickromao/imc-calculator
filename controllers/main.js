import { modal, abrirModal } from './modal.js'
import { header } from './erroInput.js'

const inputPeso = document.querySelector('#inputPeso')
const inputAltura = document.querySelector('#inputAltura')
const formIMC = document.querySelector('#formIMC')

formIMC.onsubmit = (event) => {
    event.preventDefault()

    const peso = inputPeso.value
    const altura = inputAltura.value
    const showErrorInput = header.conferirIsNaN(peso) || header.conferirIsNaN(altura)

    if (showErrorInput) {
        header.retornarInputErrrada()
        return;
    }

    header.retirarMensagemErro()

    abrirModal(peso, altura)

    inputPeso.value = ''
    inputAltura.value = ''
}

modal.formModal.onsubmit = (event) => {
    event.preventDefault()
    modal.fecharModal()
}

inputPeso.oninput = () => header.retirarMensagemErro()
inputAltura.oninput = () => header.retirarMensagemErro()


