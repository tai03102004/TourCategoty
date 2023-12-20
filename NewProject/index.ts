import express, {Express,Request,Response} from 'express';
import sequelize from './config/database';
import dotenv from "dotenv";
import Tour from "./models/tour.model";

dotenv.config();

sequelize;

// End database


const app : Express = express();

const port : number | string = process.env.PORT || 3000;

// Pug
app.set("views","./views");
app.set('view engine', 'pug');
// End pug

app.get("/", async (req: Request , res : Response)  => {
    const tours = await Tour.findAll({
        raw : true // Vẽ lại data theo 1 mảng 
    });
    console.log(tours);
    res.render("client/pages/tours/index",{
        tours: tours,
    });
});

app.listen(port , () => {
    console.log(` App listening on port ${port}`);
});