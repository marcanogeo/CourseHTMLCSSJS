var nombre = 'Geo M';
var altura =  1.65;

//document.write(nombre);
//document.write(altura);

//var concat = nombre + " "+ altura;
//document.writeln(concat);
// var datos = document.getElementById("datos");
// datos.innerHTML = `
//     <h1>Soy la caja de datos</h1>
//     <h2>Mi nombre es: ${nombre}</h2>
//     <h3>y mido ${altura} cm</h3>
// `;


// if(altura >= 1.60){
//    datos.innerHTML += '<h1> Eres una persona alta</h1>';
// }else {
//     datos.innerHTML += '<h1> Eres de estatura promedio </h1>';
// }

function Muestraminombre(nombre, altura){
    var misDatos = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>y mido ${altura} cm</h3>
 `;
    return misDatos;
}
function imprimir (){
    var datos = document.getElementById("datos");
    datos.innerHTML = Muestraminombre("Georgelys Marcano", 44);
}
// Muestraminombre("Georgelys Marcano gg",40);

imprimir();

var nombres = ["Lauisa", "Laura", "María"];
document.write("<h1>Listado de Nombre</h1>");
// for (i=0; i < nombres.length; i++){
//     document.write(nombres[i] + '<br/>');
// }
// nombres.forEach(function (nombre){
//     document.write(nombre + '<br/>');
// });

nombres.forEach((nombre)=>{
    document.write(nombre + '<br/>');
})