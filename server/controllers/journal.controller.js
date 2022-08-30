const JournalService = require("../services/journal.service")

module.exports.create = async (req, res) => {
    try {
        const newJournal = await JournalService.create(req.body)
        return res.json(newJournal)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports.getAll = async (req, res) => {
    try {
        const allJournals = await JournalService.getAll()
        return res.json(allJournals)
    } catch (error) {
        return res.json(error)
    }
}