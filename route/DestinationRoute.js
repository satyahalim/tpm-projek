import express from "express"
import {getDes,getDesById,createDes,updateDes,deleteDes} from "../controller/DestinationController.js"

const router = express.Router()

router.get("/destination",getDes)
router.get("/destination/:id",getDesById)
router.post("/destination",createDes)
router.patch("/destination/:id",updateDes)
router.delete("/destination/:id",deleteDes)

export default router
