let nome = prompt("Digite o nome completo do ser:")

if(nome == "" || nome.indexOf(" ") == -1){
alert("Erro! Digite o nome do usário completo!")
}else{

	let priEspaco = nome.indexOf(" ")
    let ultEspaco = nome.lastIndexOf(" ")
    
    let cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco, nome.length)
    
    alert("Nome: " + nome + "\n Cracha: " + cracha)
}