//Pesuisar 7 celulares que estão à venda em algum site e criar 7 objetos para reprensentar esses celulares. 
// Os objetos devem ter os atributos abaixo.



/* 
marca;
modelo;
armazenamento;
ram;
processador;
tipoTela;
cor;
bateria;
preco;

celular1: 
Marca: Samsung
Modelo: Galaxy S21 Ultra
Armazenamento: 256 GB
RAM: 12 GB
Processador: Exynos 2100 (Global) / Snapdragon 888 (USA)
Tipo de Tela: Dynamic AMOLED 2X, 120Hz, HDR10+
Cor: Phantom Black
Bateria: 5000 mAh
Preço: Aproximadamente R$ 5.500 - R$ 6.500.

celular2: 
Marca: Apple
Modelo: iPhone 13 Pro Max
Armazenamento: 512 GB
RAM: 6 GB
Processador: Apple A15 Bionic
Tipo de Tela: Super Retina XDR OLED, HDR10, Dolby Vision
Cor: Graphite
Bateria: 4352 mAh
Preço: Aproximadamente R$ 7.000 - R$ 8.500.

celular3: 
Marca: Xiaomi
Modelo: Xiaomi Mi 11 Ultra
Armazenamento: 256 GB
RAM: 12 GB
Processador: Qualcomm Snapdragon 888
Tipo de Tela: AMOLED, 120Hz, HDR10+
Cor: Ceramic White
Bateria: 5000 mAh
Preço: Aproximadamente R$ 5.000 - R$ 6.000.

celular4: 
Marca: OnePlus
Modelo: OnePlus 9 Pro
Armazenamento: 256 GB
RAM: 12 GB
Processador: Qualcomm Snapdragon 888
Tipo de Tela: Fluid AMOLED, 120Hz, HDR10+
Cor: Morning Mist
Bateria: 4500 mAh
Preço: Aproximadamente R$ 5.000 - R$ 6.000.

celular5: 
Marca: Google
Modelo: Google Pixel 6 Pro
Armazenamento: 256 GB
RAM: 12 GB
Processador: Google Tensor
Tipo de Tela: P-OLED, 120Hz, HDR10+
Cor: Stormy Black
Bateria: 5000 mAh
Preço: Aproximadamente R$ 4.500 - R$ 5.500.

celular6: 
Marca: Huawei
Modelo: Huawei P40 Pro+
Armazenamento: 512 GB
RAM: 8 GB
Processador: HiSilicon Kirin 990 5G
Tipo de Tela: OLED, 90Hz, HDR10
Cor: Ceramic White
Bateria: 4200 mAh
Preço: Aproximadamente R$ 6.000 - R$ 7.000.

celular7: 
Marca: Oppo
Modelo: Oppo Find X3 Pro
Armazenamento: 256 GB
RAM: 12 GB
Processador: Qualcomm Snapdragon 888
Tipo de Tela: AMOLED, 120Hz, HDR10+
Cor: Gloss Black
Bateria: 4500 mAh
Preço: Aproximadamente R$ 5.500 - R$ 6.500.

*/

let celular1 = {
    marca: "Samsung",
    modelo: "Galaxy S21 Ultra",
    armazenamento: "256 GB",
    ram: "12 GB",
    processador: "Exynos 2100 (Global) / Snapdragon 888 (USA)",
    tipoTela: "Dynamic AMOLED 2X, 120Hz, HDR10+",
    cor: "Phantom Black",
    bateria: "5000 mAh",
    preco: 6000
};

let celular2 = {
    marca: "Apple",
    modelo: "iPhone 13 Pro Max",
    armazenamento: "512 GB",
    ram: "6 GB",
    processador: "Apple A15 Bionic",
    tipoTela: "Super Retina XDR OLED, HDR10, Dolby Vision",
    cor: "Graphite",
    bateria: "4352 mAh",
    preco: 7750
};

let celular3 = {
    marca: "Xiaomi",
    modelo: "Xiaomi Mi 11 Ultra",
    armazenamento: "256 GB",
    ram: "12 GB",
    processador: "Qualcomm Snapdragon 888",
    tipoTela: "AMOLED, 120Hz, HDR10+",
    cor: "Ceramic White",
    bateria: "5000 mAh",
    preco: 5500
};

let celular4 = {
    marca: "OnePlus",
    modelo: "OnePlus 9 Pro",
    armazenamento: "256 GB",
    ram: "12 GB",
    processador: "Qualcomm Snapdragon 888",
    tipoTela: "Fluid AMOLED, 120Hz, HDR10+",
    cor: "Morning Mist",
    bateria: "4500 mAh",
    preco: 5500
};

let celular5 = {
    marca: "Google",
    modelo: "Google Pixel 6 Pro",
    armazenamento: "256 GB",
    ram: "12 GB",
    processador: "Google Tensor",
    tipoTela: "P-OLED, 120Hz, HDR10+",
    cor: "Stormy Black",
    bateria: "5000 mAh",
    preco: 5000
};

let celular6 = {
    marca: "Huawei",
    modelo: "Huawei P40 Pro+",
    armazenamento: "512 GB",
    ram: "8 GB",
    processador: "HiSilicon Kirin 990 5G",
    tipoTela: "OLED, 90Hz, HDR10",
    cor: "Ceramic White",
    bateria: "4200 mAh",
    preco: 6500
};

let celular7 = {
    marca: "Oppo",
    modelo: "Oppo Find X3 Pro",
    armazenamento: "256 GB",
    ram: "12 GB",
    processador: "Qualcomm Snapdragon 888",
    tipoTela: "AMOLED, 120Hz, HDR10+",
    cor: "Gloss Black",
    bateria: "4500 mAh",
    preco: 6000
};

let listaDeCelulares = [celular1, celular2, celular3, celular4, celular5, celular6, celular7];


for(let i = 0; i<listaDeCelulares.length;i++){
    console.log(`${listaDeCelulares[i].marca} - ${listaDeCelulares[i].modelo} - ${listaDeCelulares[i].armazenamento} - ${listaDeCelulares[i].ram} - ${listaDeCelulares[i].cor} --> R$ ${listaDeCelulares[i].preco}`);
}

