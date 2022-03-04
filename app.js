const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./app/routes/user.routes');
const postRoutes = require('./app/routes/post.routes');
const commentRoutes = require('./app/routes/comment.routes');

let corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.get('/', (req, res) => {
    res.json({ message: 'bienvenue gros' });
});



app.use('/api/user', userRoutes);
app.use('/api', postRoutes);
app.use('/api', commentRoutes);


module.exports = app;