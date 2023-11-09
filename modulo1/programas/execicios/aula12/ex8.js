


let n = Number(prompt("Digite o número da tabuada:"))
document.write(`Tabuada do ${n}:<br>`)
for(let i = 1; i<=10; i++){
    let resultado = n * i
    document.write(`${n} x ${i} = ${resultado}<br>`)
}