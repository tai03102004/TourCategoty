import express, {Express} from 'express';
import sequelize from './config/database';
import dotenv from "dotenv";

// Router Client
import clientRoutes from './routes/client/index.route';

dotenv.config();

sequelize;

// End database


const app : Express = express();

const port : number | string = process.env.PORT || 3000;

// Pug
app.set("views","./views");
app.set('view engine', 'pug');
// End pug

clientRoutes(app);

// public
app.use(express.static("public"));

app.listen(port , () => {
    console.log(` App listening on port ${port}`);
});