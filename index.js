const compression = require('compression')
const express = require('express')
const app = express()
const globalRoute = require("./routes/globalRoute")
const cors = require('cors')

app.use(compression())
app.use(cors({
    origin: "*",
}))

app.use("/api", globalRoute)

app.listen(4000, () => {
    console.log("Server is listening on PORT 4000")
})