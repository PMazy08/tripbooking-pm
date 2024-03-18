import express from "express";
import { router as index } from "./api/index";
import { router as trip } from "./api/trip";
import { router as upload } from "./api/upload";
import bodyParser from "body-parser";

// app = web api application
export const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use("/", index);
app.use("/trips", trip);
app.use("/upload", upload);
app.use("/uploads", express.static("uploads"));

// app.use("/", (req, res) => {
//   res.send("Hello World!!!");
// });
