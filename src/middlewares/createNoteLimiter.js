const rateLimit = require("express-rate-limit");

const createNotesLimit = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 5,
    message: {
        success: false,
        message: "Too many notes create . Please try agin after 1 minte"
    },
    standardHeaders: true,
    legacyHeaders: false,
    statusCode: 429
})

module.exports = createNotesLimit
