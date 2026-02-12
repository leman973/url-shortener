const express = require("express")
const path = require("path")
const { connectToMongoDB } = require('./connect')
const URL = require("./models/url")
const cookieParser = require('cookie-parser')

const urlRoutes = require('./routes/url')
const staticRoute = require('./routes/staticRoute')
const userRoute = require('./routes/user')
const { checkforAuthentication, restrictTo } = require("./middleware/auth")
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8001;
const MONGO_CONN = process.env.MONGO_CONN;

connectToMongoDB(MONGO_CONN)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => {
        console.error("MongoDB connection failed:", err);
        process.exit(1);
    });

app.set('view engine', "ejs")
app.set("views", path.resolve("./views"))

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(checkforAuthentication)

app.get('/url/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistory: { timestamp: Date.now() },
        }
    })
    res.redirect(entry.redirectURL);
})

app.use("/url", restrictTo(['NORMAL', 'ADMIN']), urlRoutes)
app.use("/", staticRoute)
app.use("/user", userRoute)


app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));