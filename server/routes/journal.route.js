const JournalController = require("../controllers/journal.controller")

module.exports = app => {
    app.post("/api/journals", JournalController.create)
    app.get("/api/journals", JournalController.getAllNamesOnly)
    app.get("/api/journals/:id", JournalController.getOne)
    app.post("/api/journals/:id", JournalController.addEntry)
    app.delete("/api/journals/:id", JournalController.delete)
}
