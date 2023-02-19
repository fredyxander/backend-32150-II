import express from "express";
import * as UserController from "../controllers/user.controller.js";

const router = express.Router();

router.get("/users",UserController.getUsersController);
router.post("/user",UserController.saveUserController);
router.delete("/user/:id",UserController.deleteUserController);

export {router as apiRouter};