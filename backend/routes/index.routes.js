const router = require("express").Router();

router.get("/", () => {
    res.json("All good in here");
});

module.exports = router;