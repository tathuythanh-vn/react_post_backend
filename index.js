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

app.listen(3000, () => {
    console.log("Server is listening on PORT 3000")
})