const {nanoid} = require("nanoid")
const URL = require("../models/url")

async function handleGenerateNewShortURL(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error : "url is required"});
    const shortId = nanoid(8);
    await URL.create({
        shortId: shortId,
        redirectURL: body.url,
        visitHistory: [],
        createdBy: req.user._id,
    });
    return res.render("home",{
        id: shortId,
        baseUrl: `${req.protocol}://${req.get("host")}`,
        urls: null
    })
}

async function handleGetAnalytics(req,res){
    const shortId = req.params.shortId;
    const result =await URL.findOne({shortId})
    return res.json({
        totalclicks: result.visitHistory.length,
        analytics: result.visitHistory,
    })
}

module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics,
}