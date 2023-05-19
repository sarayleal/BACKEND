//& Importamos el paquete de escritura de node, 'fs'.
const fs = require("fs");

//& Creamos un array de objetos, que representen a personas.
const avengers = [
    {
        name: 'Spiderman',
        power: 70,
    },
    {
        name: 'Doctor Strange',
        power: 90,
    },
    {
        name: 'Hulk',
        power: 150,
    },
    {
        name: 'Thor',
        power: 95,
    },
];

//& Transformamos el array a un JSON en formato String.
const avengersJson =JSON.stringify(avengers);

//& Creamos el archivo people.json y dejamos que el callback nos avise cuando se complete la escritura.
fs.writeFile('avengers.json', avengersJson, () => {
    console.log('avengers.json created!');
});