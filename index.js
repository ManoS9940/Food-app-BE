const express = require("express")
const cookieParser = require("cookie-parser");
const { adminAuth, userAuth } = require("./middleware/middleware.js");
require("dotenv").config();
const app = express()
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`));

process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`)
    server.close(() => process.exit(1))
  })

  const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", require("./Auth/route.js"))
app.use(cookieParser());
app.get("/admin", adminAuth, (req, res) => res.send("Admin Route"));
app.get("/user", userAuth, (req, res) => res.send("User Route"));

const connectDB = require("./db.js");
connectDB();

