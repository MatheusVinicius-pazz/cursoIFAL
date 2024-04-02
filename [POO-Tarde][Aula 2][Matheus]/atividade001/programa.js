/*Pesquise 5 carros usados em sites de venda
Verifique se eles também usam os atributos abaixo
depois crie 5 objetos com as infromações pesquisadas

modelo 
marca
ano
quilometragem
potenciaMotor
cor 
preco



carro1
modelo: HONDA CITY SEDAN LX 1.5 FLEX 16V 4P AUT.
marca: HONDA
ano:2011
quilometragem: 130000
potenciaMotor: 1.5
cor: Preto
preco: R$ 41.500

carro2
modelo: CHEVROLET CRUZE LT 1.8 16V FLEXPOWER 4P AUT.
marca: CHEVROLET
ano:2012    
quilometragem: 39662
potenciaMotor: 1.8
cor: Prata
preco: R$ 32.000


carro3
modelo: VOLKSWAGEN POLO SEDAN 1.6 MI TOTAL FLEX 8V 4P
marca: VOLKSWAGEN
ano:2012
quilometragem: 143000
potenciaMotor: 1.6
cor: Cinza
preco: R$ 34.000

carro4
modelo: VOLKSWAGEN JETTA GLI 350 TSI 2.0 16V 4P AUT.
marca: VOLKSWAGEN
ano:2020
quilometragem: 38000
potenciaMotor: 2.9
cor: Branco
preco: R$ 170.900


carro5
modelo: AUDI A3 SEDAN 1.4 TFSI FLEX TIPTRONIC 4P
marca: AUDI 
ano:2018
quilometragem: 29445
potenciaMotor: 1.4
cor: Preto
preco: R$ 98.980

*/

var carro1 = {
    modelo: "HONDA CITY SEDAN LX 1.5 FLEX 16V 4P AUT.",
    marca: "HONDA",
    ano: 2011,
    quilometragem: 130000,
    potenciaMotor: 1.5,
    cor: "Preto",
    preco: 41500
};

var carro2 = {
    modelo: "CHEVROLET CRUZE LT 1.8 16V FLEXPOWER 4P AUT.",
    marca: "CHEVROLET",
    ano: 2012,
    quilometragem: 39662,
    potenciaMotor: 1.8,
    cor: "Prata",
    preco: 32000
};

var carro3 = {
    modelo: "VOLKSWAGEN POLO SEDAN 1.6 MI TOTAL FLEX 8V 4P",
    marca: "VOLKSWAGEN",
    ano: 2012,
    quilometragem: 143000,
    potenciaMotor: 1.6,
    cor: "Cinza",
    preco: 34000
};

var carro4 = {
    modelo: "VOLKSWAGEN JETTA GLI 350 TSI 2.0 16V 4P AUT.",
    marca: "VOLKSWAGEN",
    ano: 2020,
    quilometragem: 38000,
    potenciaMotor: 2.9,
    cor: "Branco",
    preco: 170900
};

var carro5 = {
    modelo: "AUDI A3 SEDAN 1.4 TFSI FLEX TIPTRONIC 4P",
    marca: "AUDI",
    ano: 2018,
    quilometragem: 29445,
    potenciaMotor: 1.4,
    cor: "Preto",
    preco: 98980
};
var carro6 = {
    modelo: "VOLKSWAGEN VIRTUS 1.6 MSI FLEX 16V 5P MEC.",
    marca: "VOLKSWAGEN",
    ano: 2020,
    quilometragem: 52000,
    potenciaMotor: 1.6,
    cor: "Branco",
    preco: 68.900
};

var carro7 = {
    modelo: "HYUNDAI SONATA 2.4 16V 182CV 4P AUT.",
    marca: "HYUNDAI",
    ano: 2013,
    quilometragem: 100000,
    potenciaMotor: 2.9,
    cor: "Branco",
    preco: 170900
};

var carro8 = {
    modelo: "HYUNDAI HB20 UNIQUE 1.0 FLEX 12V MEC.",
    marca: "HYUNDAI",
    ano: 2019,
    quilometragem: 70000,
    potenciaMotor: 1.0,
    cor: "Cinza",
    preco: 53.900
};



console.log("CARROS--------------------------------------------------")
console.log(`${carro1.modelo} - ${carro1.marca} - ${carro1.ano} - ${carro1.quilometragem} --> R$ ${carro1.preco} `)
console.log(`${carro2.modelo} - ${carro2.marca} - ${carro2.ano} - ${carro2.quilometragem} --> R$ ${carro2.preco} `)
console.log(`${carro3.modelo} - ${carro3.marca} - ${carro3.ano} - ${carro3.quilometragem} --> R$ ${carro3.preco} `)
console.log(`${carro4.modelo} - ${carro4.marca} - ${carro4.ano} - ${carro4.quilometragem} --> R$ ${carro4.preco} `)
console.log(`${carro5.modelo} - ${carro5.marca} - ${carro5.ano} - ${carro5.quilometragem} --> R$ ${carro5.preco} `)
console.log(`${carro6.modelo} - ${carro6.marca} - ${carro6.ano} - ${carro6.quilometragem} --> R$ ${carro6.preco} `)
console.log(`${carro7.modelo} - ${carro7.marca} - ${carro7.ano} - ${carro7.quilometragem} --> R$ ${carro7.preco} `)
console.log(`${carro8.modelo} - ${carro8.marca} - ${carro8.ano} - ${carro8.quilometragem} --> R$ ${carro8.preco} `)

console.log("-------------------------------------------------- <br>")

let listaDeCarros = []
listaDeCarros.push(carro1)
listaDeCarros.push(carro2)
listaDeCarros.push(carro3)
listaDeCarros.push(carro4)
listaDeCarros.push(carro5)
listaDeCarros.push(carro6)
listaDeCarros.push(carro7)
listaDeCarros.push(carro8)


console.log("CARROS2--------------------------------------------------")
for(let i = 0; i<listaDeCarros.length; i++){
    console.log(`${listaDeCarros[i].modelo} - ${listaDeCarros[i].marca} - ${listaDeCarros[i].ano} - ${listaDeCarros[i].quilometragem} --> R$ ${listaDeCarros[i].preco}`)
}
