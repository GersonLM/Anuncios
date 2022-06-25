import app from './app'
import properties from './config/properties';
import './db'
const port = properties.PORT;

app.listen(port,()=> console.log(`Servidor corriendo en el puerto ${port}`))