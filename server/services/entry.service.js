const {Entry} = require("../models/entry.model")


module.exports.create = async (data) =>{
    try {
        const newEntry = await Entry.create(data)
        return newEntry
    } catch (error) {
        return error
    }
}