const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
  const salarioAtual = Number(frm.inSalario.value)
  const estagio = frm.inEstagio.checked
  const temporario = frm.inTemporario.checked
  const efetivo = frm.inEfetivo.checked

  let salarioNovo 
  if(estagio==true){
    salarioNovo = salarioAtual*1.05
    resp.innerText = `Seu novo salário será: R$ ${salarioNovo.toFixed(2)}`
  }else if(temporario==true){
    salarioNovo = salarioAtual*1.08
    resp.innerText = `Seu novo salário será: R$ ${salarioNovo.toFixed(2)}`
  } else if(efetivo==true){
    salarioNovo = salarioAtual*1.15
    resp.innerText = `Seu novo salário será: R$ ${salarioNovo.toFixed(2)}`
  }
})