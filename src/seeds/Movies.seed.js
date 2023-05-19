//Importamos mongoose para conectarnos a la base de datos.
const mongoose = require("mongoose");
//Importamos el modelo Movie.
const Movie = require ("./../models/movie.models.js");

//Importamos dotenv.
const dotenv = require("dotenv");
dotenv.config()

const moviesDataSet = [
    {
        title: "The Batman",
        poster: "https://xl.movieposterdb.com/22_02/2022/1877830/xl_1877830_764432ad.jpg?v=2023-05-01%2023:32:08",
        year: 2022,
        director: "Matt Reeves",
    },
    {
        title: "Dune",
        poster: "https://xl.movieposterdb.com/21_08/2021/1160419/xl_1160419_565d3d10.jpg?v=2023-05-04%2004:00:36",
        year: 2021,
        director: "Denis Villenieuve",
    },
    {
        title: "Vigilante",
        poster: "https://xl.movieposterdb.com/22_01/2020/10751528/xl_10751528_24924696.jpg?v=2022-01-24%2021:28:10",
        year: 2020,
        director: "Caleb Lisitsin",
    },
];

//Convertimos cada una de las películas del dataSet en tipo Movie.
const movieDocuments = moviesDataSet.map((movie) => new Movie(movie));

//Una vez tenemos los documentos con su tipo transformados nos conectamos a la base de datos.
const MONGO_URI = "mongodb+srv://sarayleal2022:Diciembre2021@cluster0.9sercwk.mongodb.net/movies?retryWrites=true&w=majority"
mongoose
.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(async() => {
    //vamos a encontrar con el método find, todos los personajes que haya en la base de datos, del tipo modelo Movie.
    const allMovies = await Movie.find();
    //Si allMovies, tiene algo ...
    if(allMovies.length) {
        //Borramos toda la coleccion de movies
        await Movie.collection.drop();
        console.log("Coleccion borrada")
    }
})
    .catch((err)  => console.log("Error, borrando movies",err))
    .then(async() => {
        //una vez vaciada la colecion de movies de la base de datos, inertamos todos los elementos que haya en nuestro array de documentos.
        await Movie.insertMany(movieDocuments)
        console.log("Coleccion creada")
    })
    .catch((err) => console.log("Error insertandoo movies", err))
    //Finalmente nos desconectamos de la base de datos.
    .finally(() => mongoose.disconnect());


