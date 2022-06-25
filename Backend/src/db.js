import mongoose from "mongoose";
import properties from "./config/properties";

mongoose.connect(properties.DB, {useNewUrlParser: true})
    .then(() => console.log('Coneccion exitosa a la base de datos'))
    .catch(err => console.log(`Ocurrio un error al conectar con la DB: ${err}`))

    
process.on('SIGINT', () =>{
    mongoose.connection.close(() => {
        console.log('Mongo desconectado');
        process.exit(0);
    })
})