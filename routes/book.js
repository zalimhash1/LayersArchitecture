import express from "express";
import BookController from "../controllers/book";

const router = express.Router();
router.get("/",BookController.get);
router.get("/:id",BookController.getById);
router.post("/",BookController.create);
router.patch("/",BookController.update);
router.delete("/",BookController.delete);

export default router;