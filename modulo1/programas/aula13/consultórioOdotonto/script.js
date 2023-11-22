const frm = document.querySelector("form")
const listaDeatendimentoNormal = document.querySelector("#atdNormal")
const atendimentoPreferencial = document.querySelector("#atdPreferencial")
const atendimento = document.querySelector("span")

let pacientes = [];


frm.addEventListener("submit", (e) => {
    e.preventDefault();
    let nome = frm.inPaciente.value
    let idade = Number(frm.inIdade.value)
    frm.inPaciente.focus();
    pacientes.push({ nome, idade})
    
    


    let lista = '';
    for (let i = 0; i < pacientes.length; i++) {
        lista = lista + (i + 1) + '. ' + pacientes[i].nome + " - " + pacientes[i].idade + " anos" + '\n'
    }

    listaDeatendimentoNormal.innerText = lista
    frm.inPaciente.value = ''
    frm.inIdade.value = ''
});

frm.btSeparar.addEventListener("click", () => {
    let listaNormal = 'Lista normal: \n '
    let listaPre = 'Lista Preferencial: \n'
    let m = 1



    for (let i = 0; i < pacientes.length; i++) {
        if(pacientes[i].idade < 60) {
            listaNormal = listaNormal + (m) + '. ' + pacientes[i].nome + " - " + pacientes[i].idade + " anos" + '\n'

            m++
        }
        
    }
    let n = 1
    
    for (let j = 0; j < pacientes.length; j++){
        if(pacientes[j].idade >=60) {
        
            listaPre = listaPre +(n) + '. ' + pacientes[j].nome + " - " + pacientes[j].idade + " anos" + '\n'
            
            n++
        }
    }

    
    listaDeatendimentoNormal.innerText = listaNormal
    atendimentoPreferencial.innerText = listaPre

    
});





frm.btAtender.addEventListener("click", () => {
    let proximo = ''
    let paciente = 0
    for(let i = 0; i<pacientes.length; i++){
        if(pacientes[i].idade>=60){
            paciente = i
            break
        }
    }
console.log(pacientes)

    atendimento.innerText = pacientes[paciente].nome
    pacientes.splice(paciente,1)
})

