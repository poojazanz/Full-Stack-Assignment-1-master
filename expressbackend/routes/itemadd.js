const express = require("express");
const Router = express.Router();
const groceryitemModel = require("../model/groceryitemModel");

//Add items
Router.post("/add", (req, res) => {
  const data = req.body;
  const grocerydata = new groceryitemModel({
    groceryItem: data.groceryItem,
    isPurchased: data.isPurchased,
  });
  grocerydata
    .save()
    .then((result) => res.send({ result: "success" }))
    .catch((err) => res.send("error"));
});

//Get All items
Router.get("/getAll", async (req, res) => {
  try {
    const result = await groceryitemModel.find({});
    res.send(result);
  } catch (err) {
    res.send("err");
  }
});

//Update Items
Router.put("/updatePurchaseStatus/:_id", (req, res) => {
  groceryitemModel
    .findByIdAndUpdate(
      { _id: req.params._id },
      { isPurchased: req.body.isPurchased }
    )
    .then((result) => res.send({ result: "success" }))
    .catch((err) => res.send("error"));
});

//Delete Items
Router.delete("/deleteGroceryItem/:_id", (req, res) => {
  groceryitemModel
    .findByIdAndDelete({ _id: req.params._id })
    .then((result) => res.send({ result: "success" }))
    .catch((err) => res.send("error"));
});
module.exports = Router;
