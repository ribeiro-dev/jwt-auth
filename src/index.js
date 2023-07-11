import express from "express";
// import jwt from "jsonwebtoken";
import "dotenv/config"; // import and invoke


// const JWT_SECRET = process.env.JWT_SECRET;
const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.json())

const users = [
    {
        email: 'john.doe@email.com',
        password: '123@@abc'
    },
    {
        email: 'bill@email.com',
        password: '123@@abc'
    }
];


// Routes
app.get('/', (req, res) => {
    res.json({message: 'Hello World!'});
})

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(user => user.email == email);

    if (!user) {
        return res.status(404).json({ message: 'Email não encontrado' });
    };

    if (user.password != password) {
        return res.status(401).json({ message: 'Email e/ou senha inválidos' });
    }

    res.json({ message: 'Logged in!' });
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})