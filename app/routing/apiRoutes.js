var friendsData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (err, res) {
        res.json(friendsData);
    });
    app.post("/api/tables", function (req, res) {
        friendsData.push(req.body);
        res.json(friendsData);
    });
}