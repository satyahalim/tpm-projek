import Destination from "../model/DestinationModel.js";

//untuk menampilkan semua wish
async function getDes(req,res) {
    try {
        const item = await Destination.findAll()
        return res.status(200).json({
            status:"Success",
            message: "Destination Retrieved",
            data: item
        })
    } catch (error) {
        return res.status(error.statusCode).json({
            status: "error",
            message : error.message
        })
    }  
}

async function getDesById(req, res) {
  try {
    const item = await Destination.findOne({ where: { id: req.params.id } });
    if (!item) {
      return res.status(404).json({
        status: "Error",
        message: " Destination not found 😮",
      });
    }

    return res.status(200).json({
      status: "Success",
      message: "Destination retrieved",
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
async function createDes(req,res) {
    try {
        const item = await Destination.create(req.body)
        return res.status(200).json({
            status:"Success",
            message: "Destination Added",
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
async function updateDes(req,res) {
    try {
        await Destination.update(req.body,{
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
async function deleteDes(req,res) {
    try {
       await Destination.destroy({
        where:{
            id: req.params.id
          } 
       })
       res.status(200).json({
        status:"Success",
        msg: "Destination Deleted"});
    } catch (error) {
        console.log(error.message)
    }  
}


export {getDes,getDesById,createDes,updateDes,deleteDes}
