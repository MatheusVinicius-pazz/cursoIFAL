let a = Number(prompt("Digite o valor de A:"))
let b = Number(prompt("Digite o valor de B:"))

for(let i = a; i<=b;i++){
if(i%5==2 || i%5==3){
	document.write(i+', ')
}
}
