let clienteA = {
    nome: 'João',
    endereco: 'rua Tal, 10 - Tabuleiro - Maceió -  AL - CEP: 57000-000'
}

let clienteB = {
    nome: 'Cleiton',
    rua:'X',
    numero: '15',
    bairro: 'Mata do Rolo',
    cidade: 'Rio Largo'


}

clienteC = {
    nome: 'Rasta',

    endereco: {
        rua: 'Da pedra',
        numero: '20',
        bairro: 'centro',
        cidade: 'Cajueiro'
    }
}




console.log("Cliente A: ", clienteA.endereco);
console.log("Cliente B: ", clienteB.cidade);
console.log("Cliente C: ", clienteC.endereco.cidade);
console.log('------------------------------------------------------')
//-----------------------------------------------------------------
// Função para fazer uma requisição HTTP GET
// o código abaixo consulta as informações usando a api de CEP dos correios.
/*
function getCEP(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        // Verifica se o CEP foi encontrado
        if (!data.erro) {
          // Exibe as informações do endereço
          console.log("CEP:", data.cep);
          console.log("Logradouro:", data.logradouro);
          console.log("Complemento:", data.complemento);
          console.log("Bairro:", data.bairro);
          console.log("Cidade:", data.localidade);
          console.log("Estado:", data.uf);
        } else {
          console.log("CEP não encontrado.");
        }
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      });
  }
  
  // Exemplo de uso da função
  getCEP('57990000'); // Insira o CEP desejado aqui
  */

  alunoA = {
    nome: 'José',
    disciplinas: ['POO', 'PWEB']
  }

  console.log(alunoA.nome)
  console.log(alunoA.disciplinas[0])
  console.log(alunoA.disciplinas[1])
  