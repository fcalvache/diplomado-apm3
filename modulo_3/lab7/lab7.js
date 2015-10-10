/* Uso de funciones, variables y estructuras de control */

var a,b;

a = 54;
b =54;
a= parseInt(prompt('numero A:',0));
b= parseInt(prompt('numero B:',0));

var resuelva = function(a, b){
	var res = 'Valores: ' + a + ' y ' + b +',';
	if (a>b)
		console.log(res + ' Se suman, resultado ' + Number(a+b));
	else if(a<b)
		console.log(res + ' Se multiplican, resultado ' + Number(a*b));	
	else if(a === b)
		console.log(res + ' Se dividen, resultado ' + Number(a/b));	
}

resuelva(a,b);