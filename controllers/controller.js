const resturantModel = require('../models/model')
const validate = require("../Middleware/validate")
const newResturant = async (req, res)=>{
    try {
        const newRes = await resturantModel.create(req.body)
        res.status(200).json({
            message: 'Contact created successfully',
            data: newRes
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}



const getResturant = async (req, res)=>{
    try {
        const user = await resturantModel.findById(req.params.id)
        .populate("citizenMeal",["main","sides","drink"])
        .populate("refuelMax",["main","sides","drink"])
        .populate("chickWizz",["main","sides","drink"])
        res.status(200).json({
            data: user
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//update
const updateMenu = async (req, res) => {
    try {
      const menuId = req.params.id;
      const menu = await menu.findByIdAndUpdate(menuId, req.body, {
        new: true,
        runValidators: true,
      });
      if (!menu) {
        res.status(400).json({
          messaage: "error",
        });
      } else {
        res.status(200).json({
          messaage: "updated patient",
          data: menu,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

const updateContact = async (req, res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const deleteContact = async (req, res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
//delete
const deleteMenu = async (req, res) => {
  try {
    const menuId = req.params.id;
    const menu = await Menu.findByIdAndDelete(menuId);
    if (!menu) {
      res.status(400).json({
        messaage: "error",
      });
    } else {
      const branch = await Branch.findById(menu.branch.branchId);
      if (menu.mealName === "citizenMeal") {
        branch.citizenMeal = null;
        await branch.save();
      } else if (menu.mealName === "refuelMax") {
        branch.refuelMax = null;
        await branch.save();
      } else if (menu.mealName === "refuel") {
        branch.refuel = null;
        await branch.save();
      } else if (menu.mealName === "chickWizz") {
        branch.chickWizz = null;
        await branch.save();
      } else if (menu.mealName === "bigBoyzMeal") {
        branch.bigBoyzMeal = null;
        await branch.save();
      }
      res.status(200).json({
        messaage: "deleted nemu",
        data: menu,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
   });
  }
 };

module.exports = {
    newResturant,
    getResturant,
    updateContact,
    deleteContact
}