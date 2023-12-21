import {Request,Response} from 'express';
import Category from "../../models/category.model";
// [GET]/category/
export const index = async(req:Request, res:Response) => {
    // SELECT * FROM tours WHERE deleted = false AND status = "active";
    const categories = await Category.findAll({
        where : {
            deleted : false,
            status :"active",
        },
        raw : true // Vẽ lại data theo 1 mảng 
    });
    res.render("client/pages/category/index",{
        pageTitle : "Danh sách category",
        categories: categories,
    });
}