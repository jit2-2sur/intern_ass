const express = require("express");
const fetch = require("node-fetch");

const app = express();
const port = 3000;

app.use(express.json());

app.post("/proxy", async (req, res) => {
    const { url, method, headers, body } = req.body;

    try {
        const response = await fetch(url, {
            method: method,
            headers: headers,
            body: JSON.stringify(body),
        });

        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        res.status(500).json({ error: "An error occurred" });
    }
});

app.listen(port, () => {
    console.log(`Proxy server listening at http://localhost:${port}`);
});