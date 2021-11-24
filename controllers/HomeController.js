// New Express Router
const router = require("express").Router()

// Router Middleware

// Router Routes
router.get("/", (req, res) => {
    res.json({response: "server is working"})
})

// Export Router
module.exports = router