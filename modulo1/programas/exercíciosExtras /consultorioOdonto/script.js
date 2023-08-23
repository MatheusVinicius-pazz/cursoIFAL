
const formulario = document.querySelector("form")
const listaDeAtendimento = document.querySelector("pre")




const listaDePacientes = []

formulario.addEventListener("submit", (e)=>{
    e.preventDefault()

    const nomePaciente = formulario.paciente.value

    listaDePacientes.push(nomePaciente)

    let lista = ''

    listaDePacientes.forEach((item, i) => lista += `${i+1}. ${item}\n`)

    listaDeAtendimento.innerText = lista
    
})






