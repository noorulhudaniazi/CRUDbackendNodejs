import express from "express";
const router = express.Router();
import usercontroller from "../controlers/usercontroler.js";
import fetchid from "../midleware/fetchid.js";


router.post('/createuser', usercontroller.createClient)

router.get('/getusers', usercontroller.getAllClient)

router.post('/getuser', fetchid, usercontroller.getClientById)

router.put('/updateuser', usercontroller.updateClient)

router.delete('/deluser/:id', usercontroller.deleteClient)

router.post('/login', usercontroller.loginhandler)

export default router