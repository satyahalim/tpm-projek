import express from "express"
import {getReview,getReviewById,createReview,updateReview,deleteReview} from "../controller/ReviewController.js"

const router = express.Router()

router.get("/review",getReview)
router.get("/review/:id",getReviewById)
router.post("/review",createReview)
router.patch("/review/:id",updateReview)
router.delete("/review/:id",deleteReview)

export default router
