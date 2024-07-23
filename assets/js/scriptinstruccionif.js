/* instrucciones de flujo de datos */
/* if - switch */
/* if(condicional){
    bloque de instrucciones
} */
/* solicitar edad a una persona para saber si es mayor de edad */
var edad = prompt('ingrese su edad');
edad = parseInt(edad);

if(edad >= 18){
    console.log(`la edad ${edad} corresponde a mayor de edad`)
};

/* en base a dos colores: rojo y verde, indicar cual es el favorito de un usuario */
var colorFavorito = prompt('ingrese su color favorito (rojo y verde): ');
if(colorFavorito == 'rojo'){
    console.log('el color favorito es rojo')
}  else{
        console.log('el color favorito es verde');
    }

/* en base a tres colores: rojo, verde, amarillo, indicar cual es el color favorito de un usuario */
var  colorFavorito = prompt('ingrese su color favorito(rojo, verde o amarillo)');
if (colorFavorito == 'rojo') {
    console.log('el color favorito es rojo');
} else if(colorFavorito == 'verde'){
    console.log('el color favorito es verde')
} else{
    console.log('el color favorito es el amarillo')
};

/* anidacion de if */

if(true){
    if(true){

    }
}else{
    if(true){

    }
}

/* en base a tres colores; rojo, verde y amararillo, indicar cual es el favorito de un usuario */
var colorFavorito = prompt('ingrese su color favorito(rojo, verde o amarillo): ');
switch (colorFavorito) {
    case 'rojo':
        console.log('el color favorito es rojo');
        break;
    case 'verde':
        console.log('el color favorito es variable');
        break;
    default:
        console.log('el color favorito es amarillo');
        break;
}
        

