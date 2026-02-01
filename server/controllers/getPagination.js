import Movie from '../models/movie.js';

const getPagination = async (req, res) => {
 try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const movie = await Movie.find()
      .skip(skip)
      .limit(limit);

    return res.json({ 'message': 'Send successfully', data: movie, limit, page })
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
export default getPagination;