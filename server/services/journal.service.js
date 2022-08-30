const {Journal} = require("../models/journal.model")

module.exports.create = async (data) => {
    try {
        const newJournal = await Journal.create(data)
        return newJournal
    } catch (error) {
        return error
    }
}

module.exports.getAll = async () => {
    try {
        const allJournals = await Journal.find()
        return allJournals
    } catch (error) {
        return error
    }
}