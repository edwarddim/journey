const {Journal} = require("../models/journal.model")
const TagService = require("./tag.service")
const EntryService = require("./entry.service")

module.exports.create = async (data) => {
    try {
        const newJournal = await Journal.create(data)
        return newJournal
    } catch (error) {
        throw error
    }
}

module.exports.getAllNamesOnly = async () => {
    try {
        const allJournals = await Journal.find({}, "name createdAt")
        return allJournals
    } catch (error) {
        return error
    }
}

module.exports.getOneWithEntriesAll = async (journal_id) => {
    try {
        const oneJournal = await Journal.findOne({_id:journal_id}, "entries").populate("entries")
        return oneJournal.entries
    } catch (error) {
        return error
    }
}

module.exports.getOneWithEntriesLimited = async (id) =>{
    try {
        const oneJournal = await 
            Journal.findById(id).populate({
                path:'entries',
                options:{
                    limit:20,
                    sort:{createdAt:-1}
                }
            })
        return oneJournal
    } catch (error) {
        return error
    }
}

module.exports.deleteOne = async (id) => {
    try {
        const deleteConfirm = await Journal.findByIdAndDelete(id)
        return deleteConfirm
    } catch (error) {
        return error
    }
}




module.exports.addEntry = async (body, journal_id) => {
    const {tags:potentialTags, entry} = body
    const oneJournal = await Journal.findById(journal_id)
    const {tags:existingTags} = oneJournal
    try {
        const entryTags = []
        for(let existingTag of existingTags){
            let index = potentialTags.indexOf(existingTag.name)
            if(index !== -1){
                entryTags.push(existingTag._id)
                potentialTags.splice(index,1)
            }
        }
        for(let tag of potentialTags){
            const newTag = await TagService.create({name:tag.toLowerCase()})
            entryTags.push(newTag._id)
            existingTags.push(newTag)
        }
        const entryObj = {
            "tags": entryTags,
            "body" : entry
        }
        const newEntry = await EntryService.create(entryObj)
        oneJournal.entries.push(newEntry._id)
        const updatedJournal = await oneJournal.save()
        return updatedJournal
    } catch (error) {
        console.log(error)
        return error
    }
}