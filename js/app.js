const valorH = document.querySelector('#valor')
const pessoasH = document.querySelector('#pessoas')
const reset = document.querySelector('.reset')
const porPessoa = document.querySelector('.porPessoa')
const total = document.querySelector('.total')
const btns = document.querySelectorAll('.tip')
const custom = document.querySelector(".custom")
const erro = document.querySelector(".erro")
let valor
let pessoas
let porcent
function mudarCor() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.background = "var(--Very-dark-cyan)"
    }
}
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        mudarCor()
        btn.style.background = "var(--Strong-cyan)"
        custom.value = ""
    })
})
valorH.addEventListener('keyup', () => {
    valor = valorH.value
    teste(valor, pessoas, porcent)
})
pessoasH.addEventListener('keyup', () => {
    if(pessoasH.value == 0){
        erro.style.display = "block"
    } else{
        erro.style.display = "none"
        pessoas = pessoasH.value
        teste(valor, pessoas, porcent)
    }
})
custom.addEventListener('keyup', () => {
    porcent = custom.value
    teste(valor, pessoas, porcent)
    mudarCor()
})
reset.addEventListener('click', () => {
    window.location.reload()
})
function porcentagem(porc){
    porcent = porc
    teste(valor, pessoas, porcent)
}
function teste(valor,pessoas,porcent){
    if(valor && pessoas && porcent){
        porPessoa.textContent = `$${(valor / 100 * porcent / pessoas).toFixed(2)}`
        total.textContent = `$${(valor / 100 * porcent).toFixed(2)}`
        reset.style.background = 'var(--Strong-cyan)'
    }
}