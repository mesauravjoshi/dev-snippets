import express from 'express';
import Movie from '../models/movie.js';

const router = express.Router();

router.get('/pagination', async (req, res) => {
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
})

router.post('/pagination', async (req, res) => {
  try {
    const movies = req.body;

    if (!Array.isArray(movies) || movies.length === 0) {
      return res.status(400).json({ message: 'Invalid movies data' });
    }

    const savedMovies = await Movie.insertMany(movies);

    return res.status(201).json({
      message: 'Movies saved successfully',
      data: savedMovies
    });
  } catch (error) {
    return res.json({ 'message': error })
  }
})

export default router;