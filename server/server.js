const express = require('express')
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");



const app = express();
dotenv.config();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

// import routes
const allUserRoutes = require("./routes/userRoute");
allUserRoutes(app);


mongoose.set("strictQuery", true);
// new update to run the server after db connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to the database...");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server is running on ${PORT}...`));
  })
  .catch((err) => console.log(err));
