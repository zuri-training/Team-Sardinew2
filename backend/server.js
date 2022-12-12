const http = require("http");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = require("../backend/src/index");

dotenv.config({ path: "./config.env" });

mongoose.set("strictQuery", true);
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB Connection Succesful");
  });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
