import Url from '../models/url.js';

const redirectToUrl = async (req, res) => {
    const urlId = req.params.urlId;

    if (!urlId) {
        return res.status(400).json({ error: 'URL is required' });
    }

    const existUR = await Url.findOne({ urlId });
    const viewURL = existUR.redirect;

    return res.redirect(viewURL);
}

export default redirectToUrl
