const v_max = Number(prompt("Digite a velocidade máxima"))
const v_carro = Number(prompt("Digite a velocidade do veículo."))
const resp = document.querySelector("h3")

let excesso = (v_carro/v_max-1)*100

if(excesso <=20){
    resp.innerText = `O motorista excedeu ${Math.round(excesso)}% da velocidade máxima permitida, multa de R$ 85,13 e perda de 4 pontos na carteira.`
}else if(excesso>20 && excesso<=50){
    resp.innerText = `O motorista excedeu ${Math.round(excesso)}% da velocidade máxima permitida, multa de R$ 127,69 e perda de 5 pontos na carteira.`
}else{
    resp.innerText = `O motorista excedeu ${Math.round(excesso)}% da velocidade máxima permitida, multa de R$ 574,62 e perda de 7 pontos na carteira.`

}


