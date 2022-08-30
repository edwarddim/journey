const TagService = require("../services/tag.service")

module.exports.createTag = async (req, res) => {
    try {
        const newTag = TagService.create(req.body)
        return res.json(newTag)
    } catch (error) {
        res.status(400).json(error)
    }
}