import { Router } from "express";
import users from "../controller/users"
const router = Router();

router.get("/users", users.allUsers)

export { router as users };
