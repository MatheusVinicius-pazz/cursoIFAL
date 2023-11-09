
let n = Number(prompt('Digite um número'))

n1 = 0
n2 = 1
document.write("1")
for(let i = 1; i<=n; i++){
	let n3 = n1 + n2 
	n1 = n2
    n2 = n3
    document.write(', '+n3)
}

