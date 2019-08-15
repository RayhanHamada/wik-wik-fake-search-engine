const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + "/dist"))
app.get("/", (req, res) => {
    res.render("index")
});

app.listen(PORT, () => {
    console.log("app running");
})
