import { Router } from "express";
import userRouter from "./user.ts";

const router = Router();

router.get('/', (_, res) => {
    res.json({
        message: 'Hola desde api'
    });
});

router.use('/users',userRouter)

export default router;
