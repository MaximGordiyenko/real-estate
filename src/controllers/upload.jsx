const router = require('express').Router();
const fs = require('fs');
const multer = require('multer');
import Cards from '../models/cards';

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now())
  }
});

let upload = multer({storage: storage});

router.get('/', (req, res) => {
  Cards.find({}, (err, items) => {
    if (err) {
      console.log(err);
    } else {
      res.render('app', {items: items});
    }
  });
});

router.post('/', upload.single('image'), (req, res, next) => {

  const obj = {
    name: req.body.name,
    img: {
      data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
      contentType: 'image/png'
    }
  }
  Cards.create(obj, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      // item.save();
      res.redirect('/');
    }
  });
});

// router.post('', async function (req, res) {
//   const {image} = req.body;
//   // const {image} = req.params;
//   // const {image} = req.query;
//   console.log(image);
//
//   const newItem = {
//     card_id: 1,
//     title: "Spectacular",
//     description: "Dramatic Contemporary in a beautiful location, with wide Mecox bay views to the north and the sandy ocean beach to the south.",
//     image: {
//       data: fs.readFileSync(req.files.userPhoto.path),
//       contentType: "image/png"
//     },
//     releaseDate: "14 October 2018",
//     location: "Bridgehampton South, Bridgehampton, New York, 11932 United States ",
//     price: "$1,200 000",
//     trailerPath: "https://www.youtube.com/embed/6hB3S9bIaco",
//     city: "Singer",
//     address: "914 Argyle Road",
//     latitude: -33.944576,
//     longitude: 151.25584,
//     bedrooms: 2,
//     bathrooms: 2,
//     carSpaces: 2,
//     favorite: false
//   }
//
//   try {
//     const findImage = await Cards.find({card_id: 1});
//     console.log(findImage);
//
//   } catch (error) {
//
//   }
// });

module.exports = router;