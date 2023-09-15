const frm = document.querySelector("form")
const resp = document.querySelector("h2")
const resp1 = document.querySelector("#resp01")
const resp2 = document.querySelector("#resp02")
const resp3 = document.querySelector("#resp03")
const resp4 = document.querySelector("#resp04")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    resp1.innerText = ``
    resp2.innerText = ``
    resp3.innerText = ``
    resp4.innerText = ``
    
    const saque = Number(frm.inSaque.value)
    if(saque%5 != 0){
        alert("Valor inválido para saque!")
        frm.inSaque.focus()
        frm.inSaque.value = ''
    return
    }

    const notasDuzentos = Math.floor(saque/200)
    let resto = saque%200
    const notasCinquenta = Math.floor(resto/50)
    resto = saque%50
    const notasVinte = Math.floor(resto/20) 
    resto = resto%20
    const notasCinco = Math.floor(resto/5)

    
    if(notasDuzentos>0){
        resp1.innerText = `Notas de R$ 200: ${notasDuzentos}`  
    }
    if(notasCinquenta>0){
        resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`
    }
    if(notasVinte>0){
        resp3.innerText = `Notas de R$ 20: ${notasVinte}`
    }
    if(notasCinco>0){
        resp4.innerText = `Notas de R$ 5: ${notasCinco}`
    }
 

})