import { Router } from "express";

import * as controller from "../../controllers/client/tour.controller";
const router : Router = Router();

router.get("/:slugCategory", controller.index); // Lấy ra danh sách tour sau dấu /

export const tourRoutes: Router = router;