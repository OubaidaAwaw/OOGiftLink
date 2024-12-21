  // import express
import express from "express"

  // declare express router
const router = express.Router()

  // import controller
import CommentsController from "./../../Controllers/CommentsController.js"

router.get('/:id', CommentsController.GetCommentsByGiftId)

router.post("/", CommentsController.CreateComment)

router.delete("/:id", CommentsController.DeleteComment)

export default router