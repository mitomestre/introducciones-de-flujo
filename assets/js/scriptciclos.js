/* solicitar 10 numeros por pantalla y mostrarlos */
var numero = prompt('ingresa el primer numero');
console.log('el primer numero es: ' +numero);
var numero = prompt('ingresa el segundp numero');
console.log('el segundo numero es: ' +numero);
var numero = prompt('ingresa el tercer numero');
console.log('el tercer numero es: ' +numero);
var numero = prompt('ingresa el cuarto numero');
console.log('el cuarto numero es: ' +numero);
var numero = prompt('ingresa el quinto numero');
console.log('el quinto numero es: ' +numero);
var numero = prompt('ingresa el sexto numero');
console.log('el sexto numero es: ' +numero);
var numero = prompt('ingresa el septimo numero');
console.log('el septimo numero es: ' +numero);
var numero = prompt('ingresa el octavo numero'); 
console.log('el octavo numero es: ' +numero);
var numero = prompt('ingresa el noveno numero');
console.log('el noveno numero es: ' +numero);
var numero = prompt('ingresa el decimo numero');
console.log('el decimo numero es: ' +numero);

/* soltar 10 numero en pantalla y mostrarlos */
var limite = parseInt(prompt(`¿cuantos numeros desea ingresar?`));
for(var i = 1 ; i <= 10 ; i = i + 1){
    var numero = prompt(`ingresa el ${i}° numero: `);
    console.log(`el ${i}° numero es: ${numero}`);
}