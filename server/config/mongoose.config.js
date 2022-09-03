const mongoose = require("mongoose")
const {ATLAS_PASSWORD} = require("./secret")

const DATABASE = "heroes_journey"

const uri = `mongodb+srv://edwarddim:${ATLAS_PASSWORD}@sandbox.hg1kzkd.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to the ${DATABASE}`))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));