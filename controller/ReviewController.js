import Review from "../model/ReviewModel.js";

//untuk menampilkan semua wish
async function getReview(req,res) {
    try {
        const item = await Review.findAll()
        return res.status(200).json({
            status:"Success",
            message: "Review Retrieved",
            data: item
        })
    } catch (error) {
        return res.status(error.statusCode).json({
            status: "error",
            message : error.message
        })
    }  
}

async function getReviewById(req, res) {
  try {
    const item = await Review.findOne({ where: { id: req.params.id } });
    if (!item) {
      return res.status(404).json({
        status: "Error",
        message: " Review not found 😮",
      });
    }

    return res.status(200).json({
      status: "Success",
      message: "Review retrieved",
      data: item,
    });
  } catch (error) {
    return res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
}

//function untuk menambah wishlist ke apps
async function createReview(req,res) {
    try {
        const item = await Review.create(req.body)
        return res.status(200).json({
            status:"Success",
            message: "Review Added",
            data: item
        })
    } catch (error) {
        return res.status(error.statusCode).json({
            status: "error",
            message : error.message
        })
    }   
}

//update wish
async function updateReview(req,res) {
    try {
        await Review.update(req.body,{
            where:{
            id: req.params.id
        }})
        return res.status(200).json({
            status:"Success",
            message:"Wish Updated",
        })
        
    } catch (error) {
        console.log(error.message)
    }   
}

//DELETE 
async function deleteReview(req,res) {
    try {
       await Review.destroy({
        where:{
            id: req.params.id
          } 
       })
       res.status(200).json({
        status:"Success",
        msg: "Wish Deleted"});
    } catch (error) {
        console.log(error.message)
    }  
}


export {getReview,getReviewById,updateReview,createReview,deleteReview}
