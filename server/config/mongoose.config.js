const mongoose = require("mongoose")

const DATABASE = "heroes_journey"

mongoose.connect(`mongodb://localhost/${DATABASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to the ${DATABASE}`))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));