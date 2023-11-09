
let n = Number(prompt("Digite um número: "))
document.write(','+i)
for(let i = 1; i<=n; i++){
    if(n%i==0){
        document.write(i+', ')
    }
}