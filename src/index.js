import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.error("error in express to talk to database:", err);
      throw err;
    });
    app.listen(process.env.PORT || 4000, (req, res) => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("DB connection failed: ", err);
  });
