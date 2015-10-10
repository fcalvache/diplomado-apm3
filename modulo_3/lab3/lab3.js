
/* objetos y funciones */
var person = new Object();

var universidad = [{name:"Universidad Piloto de Colombia",
direccion:"Cra 9 45-12",
carrera:"Ingenierìa de sistemas"
},
{
	firstName: 'Fabio',
	lastName: 'Calvache',
	phone: 8029317
}];


var key;

/*for(key in person){
	console.log(person[key]);
}*/

console.log(universidad[0].name);

for(key in universidad){
	console.log(universidad[key]);
}

/*

console.log(person.firstName);

console.log(person['lastName']);


// Funciones

function test(){
	console.log('ejecutando una funcion');
}

test();
*/
// usando funcion anonima

var bye_bye = function(Nombre){
	console.log('Que tengan una feliz semana santa ' + Nombre);
}

bye_bye('Fabio');

var tarea = function(){
	console.log('LEEEEEERRR');
}

tarea();
