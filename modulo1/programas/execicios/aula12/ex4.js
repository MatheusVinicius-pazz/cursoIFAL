
    let soma = 0

    let n = Number(prompt("Digite um número:"))

    if(n>14){
        for(let i = 12; i<=n; i++){

            document.write(`${i}<br>`)
            if(i%7==0){
                soma = soma + i
               
            }
        }
        document.write(`Soma:${soma}`)
    }else{
        alert('Digite um número maior que 14.')
    }