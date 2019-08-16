var friendsData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (err,res) {
        res.json(friendsData);
    })
}