const express = require('express');
const dotenv = require('dotenv');
const {
    PrismaClient
} = require('@prisma/client');


dotenv.config();

const app = express();
const PORT = process.env.PORT;
// supaya bisa pake prisma
const prisma = new PrismaClient();

app.get("/", (req, res) => {
    res.status(200).send("Service mobil is running");
});

app.get("/mobil", async (req, res) => {
    const mobil = await prisma.mobil.findMany();

    res.status(200).send(mobil);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});