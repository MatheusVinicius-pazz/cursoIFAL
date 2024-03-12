let alunos = ["João", "Maria", "José", "Pedro", "Paulo"]


alert(alunos[4]) 

alunos[alunos.length-1] = "Gerson"
alunos.push("Joaquim ")
alert(alunos)

let notas =  [10, 8, 5, 7, 10, 6]

for(let i= 0; i<=alunos.length -1 ;i++){
    console.log(`Alunos: ${alunos[i]} => Nota: ${notas[i]}`)

}

//-------------------------------------------------------------------------
//Criação de objetos


let aluno0 = {
    nome: 'João', 
    cpf: '00000000000',
    nota: 10
}
let aluno1 ={
    nome:'Maria',
    cpf :'99999999999',
    nota: 8 
}
let aluno2 = {
    nome: 'José', 
    cpf: '2222222222', 
    nota: 5
} 
let aluno3 = {
    nome: 'Pedro',
    cpf: '33333333333', 
    nota: 7
}
let aluno4 = {
    nome: 'Paulo', 
    cpf:'44444444444', 
    nota: 9
}
let aluno5 = {
    nome: 'Joaquim', 
    cpf:'55555555555', 
    nota: 6
}

console.log(aluno0.nome)
console.log(aluno0.cpf, "\n")
console.log(aluno0.nota)

aluno0.nome = 'Virgulino'

console.log(aluno0.nome)
console.log(aluno0.cpf, "\n")
console.log(aluno0.nota)
