import express from "express";
import "dotenv/config"; // import and invoke


const PORT = process.env.PORT || 3000;
const app = express();


app.get('/', (req, res) => {
    res.json({message: 'Hello World!'});
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})