import express from "express";
import * as UserController from "../controllers/user.controller.js";

const router = express.Router();

router.get("/",UserController.getUsersController);
router.post("/user",UserController.saveUserController);

export {router as apiRouter};