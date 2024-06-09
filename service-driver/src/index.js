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
    res.status(200).send("Service driver is running");
});

app.get("/driver", async (req, res) => {
    const driver = await prisma.driver.findMany();

    res.status(200).send(driver);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});