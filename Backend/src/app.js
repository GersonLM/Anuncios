import express from "express";
import morgan from "morgan";
import authRouter from "./routes/auth.routes";

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) =>  res.status(200).send('API PARA ANUNCIOS'));

//cargar las rutas
app.use('/api/auth', authRouter)

export default app;