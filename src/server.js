const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const multer = require("multer");
import dotenv from 'dotenv';
const cors = require('cors');
const mongoose = require("mongoose");
import Cards from "./models/cards";

const envConfig = dotenv.config();
if (envConfig.error) {
  console.log('.env file does not loaded');
  throw envConfig.error;
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

/** Setting up server to accept cross-origin browser requests */
app.use((req, res, next) => { //allow cross origin requests
  res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(router);

const storage = multer.diskStorage({
  destination: "./public/",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits: {fileSize: 1000000},
}).single("file");

router.post("/upload", (req, res) => {
  upload(req, res, async () => {
    const {card_id, title, description, releaseDate, location, price, trailerPath, city, address, latitude, longitude, bedrooms, bathrooms, carSpaces, favorite} = req.body;
    const {filename} = req.file;

    const card = {
      id: card_id || null,
      title: title || "unknown",
      description: description || "unknown",
      image: filename || "unknown",
      releaseDate: releaseDate || "unknown",
      location: location || "unknown",
      price: price || "unknown",
      trailerPath: trailerPath || "unknown",
      city: city || "unknown",
      address: address || "unknown",
      latitude: latitude || null,
      longitude: longitude || null,
      bedrooms: bedrooms || null,
      bathrooms: bathrooms || null,
      carSpaces: carSpaces || null,
      favorite: favorite || false,
    }

    const file = new Cards();

    for (const key in card) {
      Object.assign(file, {[key]: card[key]});
    }
    file.save().then((data) => {
    console.log(data);
      res.send(data)
    })
    /*Now do where ever you want to do*/
  });
});

router.get('/main', async (req, res) => {
  // console.log('get from req', req);
  await Cards.find({}, (err, data) => {
    if (err) {
      return res.status(400).json({error: err })
    }
    if(!data.length){
      return res
        .status(404)
        .json({ success: false, error: `Movie not found` })
    }
    return res.status(200).json({data: data })
  }).catch(err => console.log(err))
});

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}
mongoose
  .connect(process.env.MONGO_PATH, config)
  .then(() => {console.log(`MongoDB connected`)})
  .catch(error => console.log(`There is troubles with connecting to MongoDB ${error}`));

app.listen(process.env.NODE_PORT, () => console.log(`real-estate running on port: ${process.env.NODE_PORT}`));
