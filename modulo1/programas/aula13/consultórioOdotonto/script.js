
const frm = document.querySelector("form")
const listaDeatendimento = document.querySelector("pre")
const atendimento = document.querySelector("span")
const btnUrgencia = document.querySelector("#btUrgencia")
const btAtender = document.querySelector("#btAtender")

    let pacientes = []
    frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    let nome = frm.inPaciente.value
    frm.inPaciente.focus()
    pacientes.push(nome)

    let lista = ''
    
    //pacientes.forEach((item, i) => lista = lista + `${i+1}. ${item}\n`)
    for(let i=0; i<pacientes.length; i++){
        
       lista = lista + (i+1)+ '. ' + pacientes[i] + '\n'
   }

    listaDeatendimento.innerText= lista
    frm.inPaciente.value = ''

})

    btnUrgencia.addEventListener("click", ()=>{
    
    frm.inPaciente.focus()
    let nome = frm.inPaciente.value
    frm.inPaciente.focus()
    pacientes.unshift(nome)

    let lista = ''
    
   
    for(let i=0; i<pacientes.length; i++){
        
       lista = lista + (i+1)+ '. ' + pacientes[i] + '\n'
   }

    listaDeatendimento.innerText= lista
    frm.inPaciente.value = ''
})

    btAtender.addEventListener("click", ()=>{
        if(pacientes.length == 0){
            alert("Lista vazia!")
            frm.inPaciente.focus()
            return
        }
   
    
    let nome = frm.inPaciente.value
    frm.inPaciente.focus()
   
    
    let proximo = pacientes.shift()
    

    let lista = ''
    
   
    for(let i=0; i<pacientes.length; i++){
        
       lista = lista + (i+1)+ '. ' + pacientes[i] + '\n'
   }
   listaDeatendimento.innerText= lista
   atendimento.innerText = proximo
   frm.inPaciente.focus()
    
})









