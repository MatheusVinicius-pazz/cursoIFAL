
let soma = 0
let mult = 1

for(let i = 1; i<=3; i++){
    let n = Math.floor(Math.random()*101)
    document.write(`${n}<br>`)
    mult = mult * n
    soma = soma + n 
}
document.write(`Soma: ${soma}<br>Multiplicação: ${mult}`)