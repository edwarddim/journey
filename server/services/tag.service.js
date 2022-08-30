const {Tag} = require("../models/tag.model")


module.exports.create = async (data) => {
    try {
        const newTag = await Tag.create(data)
        return newTag
    } catch (error) {
        return error
    }
}

module.exports.findOne = async (data) => {
    try {
        
    } catch (error) {
        
    }
}