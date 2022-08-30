const {Tag} = require("../models/tag.model")


module.exports.create = async (data) => {
    try {
        const newTag = Tag.create(data)
        return newTag
    } catch (error) {
        return error
    }
}