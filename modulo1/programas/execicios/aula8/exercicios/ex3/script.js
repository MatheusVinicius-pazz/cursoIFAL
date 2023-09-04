const frm = document.querySelector("form")
        const resp = document.querySelector("h2")

        frm.addEventListener("submit", (e)=>{
            e.preventDefault()
            const masculino = frm.inMasculino.checked
            const feminino = frm.inFeminino.checked
            const altura = Number(frm.inAltura.value)
            const peso = Number(frm.inPeso.value)
            
            let imc = peso / Math.pow(altura, 2) 
           if(masculino == true && imc < 20.7){
            resp.innerText = 'Abaixo do peso'
            
            } else if(feminino == true && imc < 19.1){
                resp.innerText = 'Abaixo do peso'
            }else if(masculino == true && imc >= 20.7 && imc < 26.4){
                resp.innerText = 'No peso normal.'
    
            } else if(feminino == true && imc >= 19.1 && imc < 25.8){
                resp.innerText = 'No peso normal'
                
            } else if(masculino == true && imc >= 26.4 && imc < 27.8){
                resp.innerText = 'Levemente acima do peso.'

            } else if(feminino == true && imc >= 25.8 && imc < 27.3){
                resp.innerText = 'Levemente acima do peso.'

            } else if(masculino == true && imc >= 27.8 && imc < 31.1){
                resp.innerText = 'Acima do peso ideal.'

            }else if(feminino == true && imc >= 27.3 && imc < 32.3){
                resp.innerText = 'Acima do peso ideal'
            } else if(masculino == true && imc >= 31.1){
                resp.innerText = 'Obeso'      

            }else if(feminino == true && imc >= 32.3){
                resp.innerText = 'Obeso'      

            }

            
            
            
            
            
            
            

           
        })