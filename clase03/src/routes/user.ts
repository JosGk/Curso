import { Router } from "express";
import { getAllUsersList, getUserById, getUserByName } from "../controllers/users/users.controllers.ts";

const router = Router();

router.get('/', getAllUsersList);
router.get('/:id', getUserById);
router.get('/search/query', getUserByName);


export default router;