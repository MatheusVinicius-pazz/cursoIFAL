let n = Number(prompt("Digite um número: "))
let soma = 0
for(let i = 1; i<=n; i++){
    if(i%2==1){
    soma = soma + i
        document.write(i+', ')
    }
    
}
document.write(`<br>soma: ${soma}`)


