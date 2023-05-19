//& Importamos el paquete de escritura 'fs'.
const fs = require ('fs');

//& Leemos el archivo en la dirección dada y el callback es invocado cuando se termina de leer y procesar el archivo.
fs.readFile('avengers.json', (err, avengers) => {
if (err) {
   //& Si recibimos un error en el callback, lo mostramos en consola.
   console.log('There wass an error reading the file!');
}else {
    //& Si en lugar de obtener un error obtenemos los datos, hay que transformar la información con JSON.parse(), para poder mostrarla.
    const parsedAvengers = JSON.parse(avengers);
    console.log(parsedAvengers);
}
});