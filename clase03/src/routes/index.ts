import { Router } from "express";
import userRouter from "./user.ts";

const configrouter = Router();

// configrouter.get('/', (_, res) => {
//     res.json({
//         message: 'Hola desde api'
//     });
// });

configrouter.use('/users',userRouter)

export default configrouter;