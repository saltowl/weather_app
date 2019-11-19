import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FavouriteCitySchema = new Schema({
  name: {
    type: String, 
    required: true
  }
});

export default mongoose.model('FavouriteCity', FavouriteCitySchema);