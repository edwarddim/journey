const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Tag name is required"],
        minLength: [1, "Tag name must be longer than 1 character"]
    }
},{timestamps:true})

const Tag = mongoose.model("Tag", TagSchema)

module.exports = {Tag, TagSchema};