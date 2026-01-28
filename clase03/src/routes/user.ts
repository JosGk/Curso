import { Router } from "express";
import { getAllUsersList, getUserById } from "../controllers/users/users.controllers.ts";

const router = Router();

router.get('/', getAllUsersList);
router.get('/:id', getUserById);

export default router;