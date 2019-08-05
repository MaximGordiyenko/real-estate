const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//Make access for front-end address
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};

//pass options to cors directly
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//connect to DB
mongoose.connect('mongodb://max:170388max@ds127015.mlab.com:27015/maxim', {useNewUrlParser: true});

//create model for DB
const people = mongoose.model('people', {
    username: String,
    email: String,
    password: String,
});

//Result from form
app.post("/register", cors(), (req, res) => {
    const human = new people({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    human.save().then(() => console.log("data goes to db"));
    console.log(req.body);
    res.end();
});

//result from db
app.get("/getData", (req, res) => {
    let query = people.find();
    console.log(query);
    query.exec((err, docs) => {
        res.json(docs);
    })
});

app.listen(4000);
