const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const salarioAtual = Number(frm.inSalario.value)
  

    let salarioNovo

    if(salarioAtual <= 400){
        salarioNovo = salarioAtual*1.15
        resp.innerText = `Novo salário: R$${salarioNovo.toFixed(2)}\nPercentual de aumento de 15%.`
    } else if(salarioAtual<=700 && salarioAtual>400){
        salarioNovo = salarioAtual*1.10
        resp.innerText = `Novo salário: R$${salarioNovo.toFixed(2)}\nPercentual de aumento de 10%.`

    } else if(salarioAtual<= 1000 && salarioAtual>700){
        salarioNovo = salarioAtual*1.07
        resp.innerText = `Novo salário: R$${salarioNovo.toFixed(2)}\nPercentual de aumento de 7%.`
    } else if(salarioAtual<= 1600 && salarioAtual>1000){
        salarioNovo = salarioAtual*1.03
        resp.innerText = `Novo salário: R$${salarioNovo.toFixed(2)}\nPercentual de aumento de 3%.`
    } else{
        resp.innerText = "Sem aumento."
    }

})

frm.addEventListener("reset", ()=>{
    resp.innerText = ''
})