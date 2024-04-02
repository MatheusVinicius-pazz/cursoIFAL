


/*Como as "10 melhores" podem variar de acordo com diferentes opiniões e critérios, vou oferecer uma lista de 10 músicas icônicas da Música Popular Brasileira (MPB) que são amplamente reconhecidas e aclamadas. Para cada música, fornecerei título, artistas, álbum (se aplicável) e o nome do arquivo do poster.

1. **"Garota de Ipanema"**
   - Artistas: Vinicius de Moraes e Tom Jobim
   - Álbum: "Getz/Gilberto"
   - Poster: garota_de_ipanema.jpg

2. **"Construção"**
   - Artista: Chico Buarque
   - Álbum: "Construção"
   - Poster: construcao.jpg

3. **"Águas de Março"**
   - Artista: Tom Jobim e Elis Regina
   - Álbum: "Elis & Tom"
   - Poster: aguas_de_marco.jpg

4. **"Aquarela do Brasil"**
   - Artista: Ary Barroso
   - Álbum: N/A (single)
   - Poster: aquarela_do_brasil.jpg

5. **"Trem das Onze"**
   - Artista: Adoniran Barbosa
   - Álbum: N/A (single)
   - Poster: trem_das_onze.jpg

6. **"Chega de Saudade"**
   - Artista: João Gilberto
   - Álbum: "Chega de Saudade"
   - Poster: chega_de_saudade.jpg

7. **"Carinhoso"**
   - Artista: Pixinguinha
   - Álbum: N/A (single)
   - Poster: carinhoso.jpg

8. **"Roda Viva"**
   - Artista: Chico Buarque
   - Álbum: "Chico Buarque de Hollanda Vol. 3"
   - Poster: roda_viva.jpg

9. **"Cálice"**
   - Artistas: Chico Buarque e Milton Nascimento
   - Álbum: "Chico Buarque" (também conhecido como "Cálice")
   - Poster: calice.jpg

10. **"Asa Branca"**
    - Artistas: Luiz Gonzaga e Humberto Teixeira
    - Álbum: N/A (single)
    - Poster: asa_branca.jpg

*/

const musica1 = {
    titulo: "Garota de Ipanema",
    artistas: "Vinicius de Moraes, Tom Jobim",
    album: "Getz/Gilberto",
    poster: "./img/garota_de_ipanema.jpg"
  };
  
  const musica2 = {
    titulo: "Construção",
    artistas: "Chico Buarque",
    album: "Construção",
    poster: "./img/construcao.jpg"
  };
  
  const musica3 = {
    titulo: "Águas de Março",
    artistas: "Tom Jobim, Elis Regina",
    album: "Elis & Tom",
    poster: "./img/aguas_de_marco.jpg"
  };
  
  const musica4 = {
    titulo: "Aquarela do Brasil",
    artistas: "Ary Barroso",
    album: "Single",
    poster: "./img/aquarela_do_Brasil.jpg"
  };
  
  const musica5 = {
    titulo: "Trem das Onze",
    artistas: "Adoniran Barbosa",
    album: "Single",
    poster: "./img/trem_das_onze.jpg"
  };
  
  const musica6 = {
    titulo: "Chega de Saudade",
    artistas: "João Gilberto",
    album: "Chega de Saudade",
    poster: "./img/chega_de_saudade.jpg"
  };
  
  const musica7 = {
    titulo: "Carinhoso",
    artistas: "Pixinguinha",
    album: "Single",
    poster: "./img/carinhoso.jpg"
  };
  
  const musica8 = {
    titulo: "Roda Viva",
    artistas: "Chico Buarque",
    album: "Chico Buarque de Hollanda Vol. 3",
    poster: "./img/roda_viva.jpg"
  };
  
  const musica9 = {
    titulo: "Cálice",
    artistas: "Chico Buarque, Milton Nascimento",
    album: "Chico Buarque (Cálice)",
    poster: "./img/calice.jpg"
  };
  
  const musica10 = {
    titulo: "Asa Branca",
    artistas: "Luiz Gonzaga, Humberto Teixeira",
    album: "Single",
    poster: "./img/asa_branca.jpg"
  };
  


  let musicas = [musica1, musica2, musica3, musica4, musica5, musica6, musica7, musica8, musica9, musica10];

  for (let i = 0; i < musicas.length; i++) {
    document.write(`
    <div class="musica">
    <img class="capa" src="${musicas[i].poster}" alt="Capa do álbum ${musicas[i].titulo}">
    <div class="info">
        <div class="titulo">${musicas[i].titulo}</div>
        <div class="artistas">${musicas[i].artistas}</div>
         
    </div>
    <div class="album"> ${musicas[i].album}</div>  
   
</div> 

       
    `);
}