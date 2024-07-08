import { Request, Response, Router } from "express";
import * as userController from '../controller/user.controller';
import { authenticateToken } from "../middlewares/auth";
const router = Router()

router.post('/Signup' , userController.signup);
router.post('/login' , userController.login);
router.get('/test' , authenticateToken , (req: Request , res : Response)=>{
    res.send("Done  ")
})




export default router ;

