const JournalController = require("../controllers/journal.controller")

module.exports = app => {
    app.post("/api/journals", JournalController.create)
    app.get("/api/journals", JournalController.getAllNamesOnly)
}
