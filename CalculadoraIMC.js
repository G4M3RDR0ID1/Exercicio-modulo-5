function calculadoraIMC(){
//Entrada de dados

let peso = document.getElementById("peso").value;
let altura = document.getElementById("altura").value;

//Processamento

let imc = peso / (altura * altura);
let classificacaoIMC;

if(imc < 18.5){
    classificacaoIMC = "Abaixo do peso"
}
else if(imc <= 24.9){
    classificacaoIMC = "Peso ideal"
}
else if(imc <= 29.9){
    classificacaoIMC = "Sobrepeso"
}
else{
    classificacaoIMC = "Obesidade"
}

//Saida

document.getElementById("resultado").textContent = "IMC = " + imc.toFixed(2);
document.getElementById("classificacaoIMC").textContent = "Classificação do seu IMC: " + classificacaoIMC;

}