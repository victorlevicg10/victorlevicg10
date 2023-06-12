1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una variable y para qué sirve?
Una variable es un espacio de memoria reservado, sirve para almacenar informacion.

¿Cuál es la diferencia entre declarar e inicializar una variable?
Declarar es nombrar la variable con un tipo que puede ser var, const,let.
Inicializar es darle un valor inicial.

¿Cuál es la diferencia entre sumar números y concatenar strings?
Sumar numeros es realizar un operacion matematica de adicion y concatenar es unir dos strings.

¿Cuál operador me permite sumar o concatenar?
El operador +

2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
```
Nombre "String"
Apellido "String"
Nombre de usuario en Platzi "String"
Edad Number
Correo electrónico "string"
Mayor de edad "Boolean"
Dinero ahorrado Number
Deudas Number
```

3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
```
let Nombre = "Victor";
let Apellido ="Cruz";
let user_platzi ="VCRUZ";
let edad=30; 
let email="vcrz@gmail.com";
let adulto = True;
let dinero= 20000;
let deudas=200000;
```

4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
```
Nombre completo (nombre y apellido)
console.log(`Su nombre es: ${Nombre} ${Apellido}`);
Dinero real (dinero ahorrado menos deudas)^
dineroreal=dinero - deudas;
console.log(`Su dinero ahorrado es: ${dineroreal}`);
```
<strong>
Funciones
</strong>

1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una función?
Son instruccion encapsuladas o bloques de codigo que pueden ser reutilizadas.

¿Cuándo me sirve usar una función en mi código?
Cuando se va a repetir bloques de codigo

¿Cuál es la diferencia entre parámetros y argumentos de una función?
Parametros son las variables que se declaran en la funcion, en cambio argumentos son las variables que se utilizan cuando se llaman a la funcion.

2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
<code> 
```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

</code>

function mifuncion(name,lastname,nickname){
    completeName= name+ " " + lastname;
    console.log(`Mi nombre es: ${completeName} , pero prefiero que me digas ${nickname}`);
}

mifuncion("Victor Levi","Cruz Gonzales","Levi");
```
Condicionales
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un condicional?

Es una especie de pregunta, en la cual se cuestiona si la variable cumple o no un requisito o mas.

¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

IF```ELSE: Sirve para evaluar multiples condiciones.

SWITCH. evalua una condiciones con multiples casos. es mas ordenado.


¿Puedo combinar funciones y condicionales?
2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;

if (tipoDeSuscripcion=="Free"){
     console.log("Solo puedes tomar los cursos gratis");
}
else if (tipoDeSuscripcion=="Basic"){ 
console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if (tipoDeSuscripcion=="Expert"){ 
console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else if (tipoDeSuscripcion=="ExpertPlus"){ 
console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
else{
    console.log("No se reconoce tu categoría - Prueba viendo nuestros cursos.");
}
```
3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

```
if (tipoDeSuscripcion=="Free"){
     console.log("Solo puedes tomar los cursos gratis");
}
 if (tipoDeSuscripcion=="Basic"){ 
console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if (tipoDeSuscripcion=="Expert"){ 
console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if (tipoDeSuscripcion=="ExpertPlus"){ 
console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
```
💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏
```
function evaluar(dato) {
    let tipoDeSuscripcion = ["Free","Basic","Expert","ExpertPlus"];
let mensaje = ["Solo puedes tomar los cursos gratis","Puedes tomar casi todos los cursos de Platzi durante un mes","Puedes tomar casi todos los cursos de Platzi durante un año","Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];
for (let i=0; i<tipoDeSuscripcion.length;i++){
    if(dato==tipoDeSuscripcion[i]){
        console.log(mensaje[i]);
    }
}    
}

evaluar("Basic");
```
Ciclos
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un ciclo?
Es una repeticion mientras se cumplan condiciones.

¿Qué tipos de ciclos existen en JavaScript?

FOR
FOR EACH
WHILE

¿Qué es un ciclo infinito y por qué es un problema?
es cuando el ciclo no tiene una condicion de terminacion, es un problema porque el programa no puede salir de esas instrucciones y dependiendo la complejidad puede generar errores.

¿Puedo mezclar ciclos y condicionales?
2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
var i=0;
while(i<5){
     console.log("El valor de i es: " + i);
     i++;
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

var i=10;
while(i>=2){
     console.log("El valor de i es: " + i);
     i--;
}
```
3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.
```
repuesta = 4;
var respuesta = prompt("Cuanto es 2+2?");
while (respuesta !=4){
var respuesta = prompt("Cuanto es 2+2?");

}
console.log("felicidades");

```
Listas
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un array?
conjunto de datos que pertenecen homogeneos, separados por comas.
¿Qué es un objeto?
es una entidad independiente con propiedades y tipos.

¿Cuándo es mejor usar objetos o arrays?
depende de la aplicacion y el tipo de informacion que se quiera almacenar.

¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
Sii.

2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
```
let miarray=["Victor","Cruz"];
function mifuncion(array){
    console.log(array[0]);

}

mifuncion(miarray);

```

3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
```
let miarray=["Victor","Cruz"];
function mifuncion(array){
    for(i=0;i<array.length;i++){
 console.log(array[i]);
    }
   

}

mifuncion(miarray);
```

4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
```
let miobjeto={
    nombre: "Victor",
    apellido:"Cruz",
    hobby:"Programar"
};

function mifuncion(objeto){
    for(let obj in objeto){
        console.log(objeto[obj]);
    }
   

}

mifuncion(miobjeto);
```