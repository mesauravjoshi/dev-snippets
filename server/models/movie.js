import mongoose from 'mongoose';

const moviesSchema = new mongoose.Schema({
  moviesId: {
    type: String,
    require: true,
    unique: true // throwing error in this case
  },
  name: {
    type: String,
    require: true,
    unique: true
  }
})

export default mongoose.model('movie', moviesSchema);