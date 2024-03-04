import 'dart:io';
int n1 = 0;
int n2 = 0;
mult(n1, n2){
  return n1 * n2;
}
div(n1, n2){
  return n1/n2;
}
soma(n1, n2){
  return n1 + n2;
}
sub(n1, n2){
  return n1 - n2;
}


void main(){
  print("Calculadora em Dart:");
  print("Digite um número:");
  String? input = stdin.readLineSync();
  print("Digite a operação:");
  String? op = stdin.readLineSync();
  print("Digite o outro número:");
  String? input2 = stdin.readLineSync();
if(input != null && input2 != null){
  n1 = int.parse(input);
  n2 = int.parse(input2);
  var resMult = mult(n1, n2);
  var resDiv = div(n1, n2);
  var resSoma = soma(n1, n2);
  var resSub = sub(n1, n2);
  
  switch(op){
    case "*": print("Resultado: $resMult");
    break;
    case "/": print("Resultado: $resDiv");
    break;
    case "+": print("Resultado: $resSoma");
    break;
    case "-": print("Resultado: $resSub");
    break;
    default: print("Operação invalída!");
    
    
    
  }
}


}