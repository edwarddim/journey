const mongoose = require('mongoose');


const EntrySchema = new mongoose.Schema({
    body:{
        type:String,
        required:[true, "Entry body must not be empty"]
    },
    tags:[{
        type:mongoose.Types.ObjectId,
        ref:"Tag"
    }]
},{timestamps:true})


const Entry = mongoose.model("Entry", EntrySchema)


module.exports = {Entry}