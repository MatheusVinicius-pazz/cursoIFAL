const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const nome = frm.inNome.value
    const nota1 = Number(frm.nota1.value)
    const nota2 = Number(frm.nota2.value)

    let media = (nota1 + nota2)/2

    if(media >= 7){
        resp.innerText = `Nota avaliação 1: ${nota1.toFixed(1)}\nNota avaliação 2: ${nota2.toFixed(1)}\nMédia: ${media.toFixed(1)}\nVocê foi aprovado!`
    } else if(media<=3){
        resp.innerText = `Nota avaliação 1: ${nota1.toFixed(1)}\nNota avaliação 2: ${nota2.toFixed(1)}\nMédia: ${media.toFixed(1)}\nVocê foi reprovado!`

    } else {
        resp.innerText = `Nota avaliação 1: ${nota1.toFixed(1)}\nNota avaliação 2: ${nota2.toFixed(1)}\nMédia: ${media.toFixed(1)}\nVocê está na recuperação final !`

    }

})