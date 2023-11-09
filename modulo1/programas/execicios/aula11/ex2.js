
let numAl, media
let i = 1
let soma = 0
while(i<=5){
numAl = Math.floor(Math.random()*11)
soma = soma + numAl
document.write(`${i}º: ${numAl}<br>`)
i++
}
document.write(`Soma: ${soma}<br>`)
media = soma/i
document.write(`Média: ${media.toFixed(2)}`)

