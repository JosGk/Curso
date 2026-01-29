import { Router } from "express";
import { createNewUser, getAllUsersList, getUserById, getUserByName } from "../controllers/users/users.controllers.ts";

const router = Router();

router.get('/', getAllUsersList);
router.get('/:id', getUserById);
router.get('/search/query', getUserByName);
router.post('/', createNewUser);


export default router;