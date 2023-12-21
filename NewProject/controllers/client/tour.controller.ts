import {Request,Response} from 'express';
// import Tour from "../../models/tour.model";

import sequelize from "../../config/database";
import { QueryTypes } from "sequelize";

// [GET]/tours/ :slugcategory
export const index = async(req:Request, res:Response) => {
    // SELECT * FROM tours WHERE deleted = false AND status = "active";
    // const tours = await Tour.findAll({
    //     where : {
    //         deleted : false,
    //         status :"active",
    //     },
    //     raw : true // Vẽ lại data theo 1 mảng 
    // });

    const slugCategory = req.params.slugCategory; // slug Danh mục

    /*
    SELECT tours.*, price * (1 - discount/100) AS price_special
    FROM tours
    JOIN tours_categories ON tours.id = tours_categories.tour_id
    JOIN categories ON tours_categories.category_id = categories.id
    WHERE
        categories.slug = 'du-lich-trong-nuoc'
        AND categories.deleted = false
        AND categories.status = 'active'
        AND tours.deleted = false
        AND tours.status = 'active';
    */

    const tours = await sequelize.query(`
        SELECT tours.*, ROUND(price * (1 - discount/100), 0) AS price_special
        FROM tours
        JOIN tours_categories ON tours.id = tours_categories.tour_id
        JOIN categories ON tours_categories.category_id = categories.id
        WHERE
            categories.slug = '${slugCategory}'
            AND categories.deleted = false
            AND categories.status = 'active'
            AND tours.deleted = false
            AND tours.status = 'active';
    `, {
        type: QueryTypes.SELECT
    });

    // console.log(tours);

    tours.forEach(item => {
        if (item["images"]) {
            const images = JSON.parse(item["images"]);  // Chuẩn hoá array sang string(JSON)
            item["images"] = images[0]; // Lấy ra ảnh đầu tiên : Nhiều ảnh quá lấy sẽ lỗi 
        }
        item["price_special"] = parseFloat(item["price_special"]);

    })

    res.render("client/pages/tours/index",{
        pageTitle : "Danh sách tours",
        tours: tours,
    });
}