require("dotenv").config();
const express = require("express");
const sequelize = require("./db")
const models = require("./models/models");
const cors = require("cors")
const fileUpload = require("express-fileupload")
const router = require("./routes")
const errorHandler = require("./middleware/ErrorHandlingMiddleware")
const path = require('path')

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use("/api", router)


app.use(errorHandler)

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    // app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    app.listen(PORT, 'localhost'); // or server.listen(3001, '0.0.0.0'); for all interfaces
app.on('listening', function() {
    console.log('Express server started on port  at ', app.address().port, app.address().address);
});
  } catch (e) {
    console.log(e);
  }
};

start();
