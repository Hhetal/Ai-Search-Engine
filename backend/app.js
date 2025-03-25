const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require("body-parser");
const connectDB = require('./db'); 
const aiContentRoutes = require("./routes/aiContentRoutes")
const dotenv = require("dotenv");
const indexRoutes = require("./routes/indexRoutes")


dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cors());

connectDB();

//route prefixes
app.use("/api/ai-content", aiContentRoutes);  
app.use("/api/users", indexRoutes); 


app.get("/", (req, res) => {
  res.send("Welcome to My API");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
