const mongoose = require('mongoose');

const {TagSchema} = require("./tag.model")

const JournalSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Journal name is required"],
        minLength:[2, "Journal name must be longer than 2 characters"]
    },
    tags:[TagSchema],
    entries:[{
        type:mongoose.Types.ObjectId,
        ref:"Tag"
    }]
}, {timestamps:true})

const Journal = mongoose.model("Journal", JournalSchema)

module.exports = {Journal};