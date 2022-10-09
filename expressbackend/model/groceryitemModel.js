const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/MongoGroceryAdd').then((res)=>console.log('connected to db')).catch((err)=>console.log('err in connection'))
const schema=mongoose.Schema
const groceryschema=new schema({
    groceryItem:String,
    isPurchased:Boolean

})
const groceryitemModel=mongoose.model('groceryitem',groceryschema)
module.exports=groceryitemModel