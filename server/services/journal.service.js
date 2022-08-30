const {Journal} = require("../models/journal.model")

module.exports.create = async (data) => {
    try {
        const newJournal = await Journal.create(data)
        return newJournal
    } catch (error) {
        return error
    }
}

module.exports.getAllNamesOnly = async () => {
    try {
        const allJournals = await Journal.find({}, "name")
        return allJournals
    } catch (error) {
        return error
    }
}