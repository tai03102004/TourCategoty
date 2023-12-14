import express, {Express,Request,Response} from 'express';

const app : Express = express();

const port : number = 3000;

// Pug
app.set("views","./views");
app.set('view engine', 'pug');
// End pug

app.get("/", (req: Request , res : Response)  => {
    res.render("client/pages/tours/index");
});

app.listen(port , () => {
    console.log(` App listening on port ${port}`);
});