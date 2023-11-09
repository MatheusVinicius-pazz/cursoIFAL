let n = prompt('Digite um número:')
let pg = 1
document.write(`1, `)
for(let i = 1; i<n; i++){
	pg = pg * 2
    console.log(`${pg}, `)
}