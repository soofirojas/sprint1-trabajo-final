//function isValidCard(newArr){

var numCard = prompt("Escriba los digitos de su tarjeta sin espacios");

var newArr = (""+numCard).split(""); //convertir a array los digitos para que sirva el método
console.log(newArr);

for (var i = 0; i < newArr.length; i++) {//invertir los elementos del array
  var item = newArr.pop();
  newArr.splice(i, 0, item);
  console.log(newArr);
}
