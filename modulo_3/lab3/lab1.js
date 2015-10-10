/* Array en JavaScript */

'use strict';

var my_array = new Array();

var other_array = [];

my_array = [1,3,3,3,4,4,555,55,666,6,6,'sesenta y seis'];

console.log(my_array);

console.log(my_array[11]);

other_array = ['a', 'n', 'ggjggjjggjgj', 'fjfjfjf'];

console.log(other_array);

/* metodos sobre los arreglos */

// Agregando elemento despues de la ultima posicion

my_array.push(39);

other_array.push('hola mundo');

console.log(other_array);

console.log(my_array);

// Eliminar el ultimo elelmento

my_array.pop();

other_array.pop();

// eliminar el primer elemento

my_array.shift();

other_array.shift();

console.log(other_array);

console.log(my_array);


// Organizar elementos+
my_array.sort();

other_array.sort();

console.log(other_array);

console.log(my_array);

var tasks = ['comer', 'dormir', 'jugar'];


tasks.splice(3,3, "Estudiar", "saltar", "correr");
console.log(tasks);

tasks.sort();

console.log(tasks);

var estructura = {nombre: "Fabio Calvache", email:"fcalvache@hotmail.com"}

console.log(estructura.email);

var i;
var text='';
for (i = 0; i < tasks.length; i++) { 
    text+= tasks[i] + "<br>";
}

document.write(text);

