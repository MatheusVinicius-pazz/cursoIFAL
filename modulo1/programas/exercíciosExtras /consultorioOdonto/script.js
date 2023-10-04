
const formulario = document.querySelector("form")
const listaDeAtendimento = document.querySelector("pre")
const atendimento = document.querySelector("h2")
let emAtendimento = document.querySelector("#emAtendimento")

const listaDePacientes = []

formulario.addEventListener("submit", (e)=>{
    e.preventDefault()

    const nomePaciente = formulario.paciente.value

    listaDePacientes.push(nomePaciente)

    let lista = ''

    listaDePacientes.forEach((item, i) => lista += `${i+1}. ${item}\n`)

    listaDeAtendimento.innerText = lista
    
})


    document.querySelector("#urg").addEventListener("click", ()=>{
        const nomePaciente = formulario.paciente.value
        listaDePacientes.unshift(nomePaciente)
        let lista = ''
        listaDePacientes.forEach((item, i)=> lista += `${i+1}. ${item}\n`)
        listaDeAtendimento.innerText = lista
    })
    document.querySelector("#atd").addEventListener("click", ()=>{

        const nomePaciente = formulario.paciente.value
        listaDePacientes.shift(nomePaciente)
        emAtendimento = nomePaciente
        let lista = ''
        listaDePacientes.forEach((item, i)=> lista += `${i+1}. ${item}\n`)
        listaDeAtendimento.innerText = lista 
        atendimento.innerText = `Em atendimento: ${emAtendimento}`
})






