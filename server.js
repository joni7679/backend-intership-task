const express = require("express");
const connectToDb = require('./src/db/db')
const cors = require("cors");
const notesRoutes = require('./src/routes/notesRoutes' )
connectToDb()
const app = express();
app.use(cors());
app.use(express.json())
app.get('/', (req, res) => {
    res.status(200).json({
        message: "backend server is running",
    });
})
app.use('/api', notesRoutes)
const Port = 3000;
app.listen(Port, () => {
    console.log(`server is running up`);
})
