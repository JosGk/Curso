import { Router } from "express";

const router = Router();

router.get('/', (_, res) => {
    res.json({
        message: 'Hola desde api'
    });
});
export default router;
