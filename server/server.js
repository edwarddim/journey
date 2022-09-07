const express = require("express");
const cors = require("cors")

const app = express();
const PORT = 8000;

require('dotenv').config()
require("./config/mongoose.config");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const tagRoutes = require("./routes/tag.route")
tagRoutes(app)

const journalRoutes = require("./routes/journal.route")
journalRoutes(app)


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));