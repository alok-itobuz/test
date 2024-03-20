import { Router } from "express";
import { getUser, postUser } from "../controllers/userController.js";

const anotherRouter = Router()

anotherRouter.post('/', (req, res) => {
    console.log(req.body)
    res.status(200).json({
        message: 'Another router'
    })
})

export default anotherRouter