const frm = document.querySelector("form")
const resp = document.querySelector("#resp")
const tipoDeTri = document.querySelector("#tipoDeTri")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const ladoA = Number(frm.ladoA.value)
    const ladoB = Number(frm.ladoB.value)
    const ladoC = Number(frm.ladoC.value)

    if(ladoA+ladoB < ladoC || ladoB+ladoC < ladoA || ladoA+ladoC < ladoB){
        resp.innerText = 'Os lados não podem formar um triângulo.'
        tipoDeTri.innerText=''
    }else {
        if(ladoA == ladoB && ladoA ==ladoC ){
        resp.innerText = 'Os lados podem formar um triângulo.'
        tipoDeTri.innerText = 'Triângulo equilátero'
    }else if(ladoA == ladoB && ladoB != ladoC || ladoA != ladoB && ladoB == ladoC || ladoA == ladoC){
        resp.innerText = 'Os lados podem formar um triângulo.'
        tipoDeTri.innerText = 'Triângulo Isósceles.'
    }else if(!(ladoA == ladoB && ladoA ==ladoC)){
        resp.innerText = 'Os lados podem formar um triângulo.'
        tipoDeTri.innerText = 'Triângulo Escaleno.'
    }
    }
})