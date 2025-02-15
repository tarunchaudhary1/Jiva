import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";

import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js"
import incidentRoute from './routes/incidentRoute.js';
import emailRoute from "./routes/emailRoute.js";
import adminRoute from "./routes/adminRoute.js";

dotenv.config();
const port = 8800;
const app = express();

const corsOptions = {
    origin: [process.env.CLIENT_URL, process.env.ADMIN_URL],
    credentials: true
}
app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/incidents", incidentRoute);
app.use('/api/emails', emailRoute);
app.use('/api/admins', adminRoute);

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})