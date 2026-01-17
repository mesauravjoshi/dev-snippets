import express from 'express';

const app = express();
const PORT = 3000;

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom middleware
function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next(); // Pass control to next middleware/route
}

app.use(logger);

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is ${userId}`);
});

app.get('/search', (req, res) => {
    const keyword = req.query.q;
    res.send(`Search keyword: ${keyword}`);
});

app.get('/user', (req, res) => {
    const body = req.body;
    console.log(body);
    res.send("User Data Received");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
