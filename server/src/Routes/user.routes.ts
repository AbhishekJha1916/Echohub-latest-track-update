import { Request, Response, Router } from "express";
import * as userController from '../controller/user.controller';
import { authenticateToken } from "../middlewares/auth";
import {passport} from '../services/passportSetup' ;
const router = Router()

router.post('/Signup' , userController.signup);
router.post('/login' , userController.login);
router.get('/test' , authenticateToken , (req: Request , res : Response)=>{
    res.send("Done  ")
})
router.get('/login/google', passport.authenticate('google', { scope: ['email', 'profile'] }))
router.get('/google/redirect',passport.authenticate('google', { session: false , failureRedirect : 'http://localhost:5173/error' }) ,  userController.googleRedirect)




export default router ;

