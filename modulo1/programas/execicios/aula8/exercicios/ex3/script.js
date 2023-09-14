const frm = document.querySelector("form")
const resp = document.querySelector("h2")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const sexo = Number(frm.inSexo.value)
    const peso = Number(frm.inPeso.value)
    const altura = Number(frm.inAltura.value)

    let imc = peso /(Math.pow(altura, 2))

    if(sexo == 1 ){
        if(imc<20.7){resp.innerText='Abaixo do peso.'}
        else if(imc>=20.7 && imc<26.4){resp.innerText='No peso normal.'}
        else if(imc>26.4 && imc<27.8){resp.innerText='Levemente acima do peso.'}
        else if(imc>27.8 && imc<31.1){resp.innerText='Acima do peso ideal.'}
        else{resp.innerText='Obeso.'}
    }else{
        if(sexo == 2 ){
            if(imc<19.1){resp.innerText='Abaixo do peso.'}
            else if(imc>=19.1 && imc<25.8){resp.innerText='No peso normal.'}
            else if(imc>25.8 && imc<27.3){resp.innerText='Levemente acima do peso.'}
            else if(imc>27.3 && imc<32.3){resp.innerText='Acima do peso ideal.'}
            else{resp.innerText='Obeso.'}
        }
    }
})