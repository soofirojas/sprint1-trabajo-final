//function isValidCard(newArr){

var numCard = prompt("Escriba los digitos de su tarjeta sin espacios");

var newArr = (""+numCard).split(""); //convertir a array los digitos para que sirva el método
console.log(newArr);

for (var i = 0; i < newArr.length; i++) {//invertir los elementos del array
  var item = newArr.pop();
  newArr.splice(i, 0, item);
  console.log(newArr);
}

/* crear una funcion
var numCard = prompt("Ingrese los dígitos de su tarjeta");
var newArr = (""+numCard).split("");//separar en un array los numeros ingresados

var numCard = "123456";
var newArr = (""+numCard).split("");//separar en un array los numeros ingresados
console.log(newArr);

function isValidCard(newArr){ //usar el valor ingresado dentro de la función
console.log(newArr);
  if(newArr.length =< 16){ //el numero ingresado es correcto {)
  for(var i = 0; i < newArr.length; i++) {
    var item = newArr.pop();
    newArr.splice(i, 0, item);




  }
  }
  } else {
    return alert("Ingrese sólo números");
}
*/
