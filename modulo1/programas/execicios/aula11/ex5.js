<script>
		let sorteio = Math.floor(Math.random()*101)
		let x = prompt("Tente adivinhar qual número foi sorteado:")
		
		while(x!=sorteio){
			if(x>sorteio){
				x = prompt(`Tente um número menor que: ${x}`)
			}else if(x<sorteio){
				x = prompt(`Tente um número maior que: ${x}`)
			}
		}
		alert(`Parabéns o número sorteado foi o ${sorteio}.`)
	</script>