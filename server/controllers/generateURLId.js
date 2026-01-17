import { nanoid } from 'nanoid'
import Url from '../models/url.js';

const generateURLId = async (req, res) => {
    const { url } = req.body;
    const shortID = nanoid(8);
    console.log('new url', shortID);

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    const newUrl = new Url({
        urlId: shortID,
        redirect: url
    });

    await newUrl.save();

    return res.json({ 'id': shortID })
}

export default generateURLId