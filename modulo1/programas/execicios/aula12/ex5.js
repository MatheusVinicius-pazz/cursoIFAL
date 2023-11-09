
let mult = 1

    for(let i = 1; i<=10; i++){

          document.write(`${i}<br>`)
        if(i%2==1){
          
            mult = mult * i
           
        }   
    }
    document.write(`Multiplicação:${mult}`)
