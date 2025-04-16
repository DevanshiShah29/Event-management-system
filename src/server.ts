import express, { json, urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import rootRoutes from "./routes/index";
import { connectToDatabase } from "./config/dbConfig";
import bodyParser from "body-parser";
import compression from "compression";
import helmet from "helmet";

dotenv.config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression()); // compress the response
app.use(helmet()); // security purpose
app.use(json({ limit: "50mb" }));
app.use(urlencoded({ extended: true, limit: "50mb" }));

// Connect to database
connectToDatabase();

// Use routes without global Multer middleware
app.use("/", rootRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
