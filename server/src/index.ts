import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import routes from './Routes/index'
import cors from 'cors'
import {passport} from './services/passportSetup'
// import { Welcomeworker } from "./services/worker";
// Welcomeworker ;

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;
app.use(passport.initialize())

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true 
}));

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use('/' , routes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});