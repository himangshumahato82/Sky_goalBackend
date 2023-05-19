const mongoose = require("mongoose");

  
const ConnectDB = () => {
  const mognURL =process.env.mognURL
  mongoose
    .connect(mognURL, { useNewUrlParser: true })
    .then((res) => console.log(res.connection.db.databaseName))
    .catch((error) => console.log(error));
};
module.exports = ConnectDB;
