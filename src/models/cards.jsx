import mongoose from 'mongoose';

const CardsSchema = new mongoose.Schema({
  card_id: {
    type: Number,
    require: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  img: {
    data: Buffer,
    contentType: String
  },
  releaseDate: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: String,
    required: true,
    trim: true
  },
  trailerPath: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  carSpaces: {
    type: Number,
    required: true,
  },
  favorite: {
    type: Boolean,
    required: true,
  },
});

const Cards = mongoose.model('Cards', CardsSchema);
export default Cards;