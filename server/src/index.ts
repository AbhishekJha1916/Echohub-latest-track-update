import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import routes from './Routes/index'
import cors from 'cors'

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from frontend origin
  credentials: true // Enable credentials (cookies)
}));

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use('/' , routes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});