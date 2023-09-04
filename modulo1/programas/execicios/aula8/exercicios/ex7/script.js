const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
  const salarioAtual = Number(frm.inSalario.value)
  const estagio = frm.inEstagio.checked
  const temporario = frm.inTemporario.checked
  const efetivo = frm.inEfetivo.checked

  console.log(salarioAtual)
  console.log(efetivo)
})