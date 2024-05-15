export const header = {
    head: document.querySelector('header'),

    conferirIsNaN(valor) {
        return isNaN(valor) || valor == ''
    },

    retornarInputErrrada() {
        header.head.classList.remove('hide')
        header.head.classList.add('erro-hide')
    },
    
    retirarMensagemErro() {
        header.head.classList.add('hide')
        header.head.classList.remove('erro-hide')
    }
}

