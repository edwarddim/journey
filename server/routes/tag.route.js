const TagController = require("../controllers/tag.controller")

module.exports = app => {
    app.post("/api/tags", TagController.createTag)
}