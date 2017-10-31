##Tarjeta de crédito válida

Crear una web que pida, por medio de un prompt(), el número de una tarjeta de crédito y confirme su validez según el algoritmo de Luhn. Lee este blog que explica cómo funciona el algoritmo de Luhn.

Consideraciones Específicas
El código debe estar compuesto por 1 función: isValidCard
El usuario no debe poder ingresar un campo vacío

##Pasos a seguir para resolverlo
0.Crear documento index.html y app.js y enlazarlos.
1. Dentro del js, declarar la función isValidCard() Que dentro tendrá el parámetro del prompt ingresado por el usuario.
2. Por medio de un prompt pedir al usuario que ingrese el numero de su Tarjeta.
2.1 Al ingresar un campo vacío debe de marcar error:
2.2 Si marca espacio deberá arrojar un alert que diga("Favor de introducir sólo números")
2.3 Crear un array vacío.

3. Pasar los numeros ingresados en orden inverso, ya sea por medio de un for o por.reverse()
3.1 Declarar un array vacío que mas adelante se llenará.
4. Buscar los números que estén en posición par en el numero(iniciando la cuenta desde 1),
esto por medio de un for que busque los indices 1,3,5,7 y asi sucesivamente, pues estos
van a equivalr a las posiciones pares.



for (var i = 0; i < a.length; i++) {
    if(i % 2 === 0) { // index is even
        ar.push(a[i]);
    }
}


5. una vez localizados esos valores dentro de un array, cada uno debe multiplicarse x2.
6. Aplicar un if a los resultados:
6.1 if el número es = a mayor a 10 suma los numeros que conforman el resultado.
6.2 if el número es menor a 10 déjalo igual.
7. EL resultado de las sumas anteriores se incorporan junto con los numeros que se dejaron igual en el array vacío.
8. Los numeros en posiciones impares se dejan igual, y tambien se incorporan al array vacío.
9. se suman todos los elementos dentro del array.
10. Al resultado de la suma se le saca residuo de 10 (% 10) y si es = a 0 tendrá que devolver true:
10.1 para ello debe hacerse un if numN % 10 === 0, return true
10.2 si no return false

![diagrama-de-flujo.jpg](http://subefotos.com/ver/?9cedc8b8aba34b62d40755ceb79b8ddao.jpg)
