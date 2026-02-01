import express from 'express';
import Movie from '../models/movie.js';
import getPagination from "../controllers/getPagination.js";

const router = express.Router();

router.get('/pagination', getPagination)

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