import { Request,Response } from "express";
import { Router } from "express";
import Tour from "../../models/tour.model";
const router : Router = Router();

router.get('/', async (req: Request , res : Response)  => {
    const tours = await Tour.findAll({
        raw : true // Vẽ lại data theo 1 mảng 
    });
    console.log(tours);
    res.render("client/pages/tours/index",{
        tours: tours,
    });
});

export const tourRoutes: Router = router;