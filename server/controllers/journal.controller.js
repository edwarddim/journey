const JournalService = require("../services/journal.service")

module.exports.create = async (req, res) => {
    try {
        const newJournal = await JournalService.create(req.body)
        return res.json(newJournal)
    } catch (error) {
        return res.status(400).json(error)
    }
}

module.exports.getAllNamesOnly = async (req, res) => {
    try {
        const allJournals = await JournalService.getAllNamesOnly()
        return res.json(allJournals)
    } catch (error) {
        return res.json(error)
    }
}

module.exports.getOne = async (req, res) => {
    try {
        const oneJournal = await JournalService.getOneWithEntriesLimited(req.params.id)
        return res.json(oneJournal)
    } catch (error) {
        res.json(error)
    }
}

module.exports.addEntry = async (req, res) => {
    try {
        const confirmation = await JournalService.addEntry(req.body, req.params.id)
        return res.json(confirmation)
    } catch (error) {
        return res.json(error)
    }
}

module.exports.delete = async (req, res) => {
    try {
        const deleteConfirm = await JournalService.deleteOne(req.params.id)
        return res.json(deleteConfirm)
    } catch (error) {
        res.json(error)
    }
}

module.exports.getJournalEntries = async (req,res) => {
    try {
        const allJournalEntries = await JournalService.getJournalEntries(req.params.id)
        return res.json(allJournalEntries)
    } catch (error) {
        return res.json(error)
    }
}