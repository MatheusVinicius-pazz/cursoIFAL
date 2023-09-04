const idade = Number(prompt("Digite a idade da criança."))
const resp = document.querySelector("h3")
if(idade >= 4 && idade <=5){
    resp.innerText = 'TURMA A'
}else if(idade>=6 && idade <=8 ){
    resp.innerText = 'TURMA B'
}else if(idade>=9 && idade <=10 ){
    resp.innerText = 'TURMA C'
}else{
    resp.innerText = 'SEM TURMA'
}