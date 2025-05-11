import { PrismaClient } from "./generated/prisma/index.js";

const client = new PrismaClient();
const pixelart = await client.pixelart.findMany();

import { readFileSync } from 'fs';
import express from "express";
const app = express();

app.use(express.static("./cursor"));
app.get("/",(request,response)=>{
    response.send(readFileSync("./canvas.html", "utf-8"));
});

app.listen(3000);
