const express = require('express');

const app = express();

// app.use(express.json());

const PORT = process.env.PORT || 8090;

app.get("/", (req, res) => res.send("hello world"));

app.post("/name", (req, res) => {
    res.status(200).send(req.body)
})

app.use((req, res, next) => {
    res.info = { "firstName": "Aseel", "lastName": "Dweedar" }
    next();
})

app.get("/name", (req, res) => {
    res.status(200).send(res.info)
})

app.use("*", (req, res) => {
    res.status(404).send("not found");
});

app.listen(PORT, () => console.log(`listening port ${PORT}`))

module.exports = { app };
