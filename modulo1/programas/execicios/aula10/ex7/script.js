
let numero 
let menorNumero = 9999



while(numero != 0){
    
    numero = Number(prompt("Digite um numero"))
     
        if(numero < menorNumero && numero > 0){
        
            menorNumero = numero
        
           
            
        }
       
   
}

document.write(`O menor número digitado foi: ${menorNumero}`)   

