function handleExpand(id) {
    let target = document.getElementById(id)
    if (target.classList.contains('hidden')){
        target.classList.remove('hidden')
    }
    else {
        target.classList.add('hidden')
    }
}

const html = document.querySelector('html')

function modoNoturno() {
    html.classList.toggle('dark-mode')
}

document.getElementById('icon').addEventListener('click', function () {
    alert('Mini Mercado e Açougue Oliveira – Rio Pardinho - RS \n\n\n- Qual sistema é usado para controle de produtos? \n\nO sistema usado é Compumax. \n\n\n- Como é feito o controle da validade dos produtos? \n\nÉ feito manualmente. \n\n\n- O mercado tem o controle total sobre o vencimento de todos os produtos dentro do estoque? \n\nO mercado não tem controle total dos produtos vencidos. \n\n\n- Já tiveram perda de produtos que ficaram vencidos nas prateleiras? Essa perda afetou o lucro do mercado? Acontece com muita frequência? \n\nSim, a perda não foi muito significativa, aconteceu uma vez. \n\n\n- Já foram prejudicados pela fiscalização por conta de produtos vencidos nas  \n\nprateleiras? Ou denúncias? \n\nSim. \n\n\n- Se o projeto for aplicado, ele seria relevante? O que não pode faltar no projeto? Algo essencial. \n\nSeria relevante.')
});