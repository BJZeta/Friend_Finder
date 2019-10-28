var friendsData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (err, res) {
        res.json(friendsData);
    });
    app.post("/api/friends", function (req, res) {
        var newUser = req.body;

        for(var i = 0; i < newUser.scores.length; i++) {
            newUser.scores[i] = parseInt(newUser.scores[i]);
        }
        
        var friendIndex = 0;

        var minDiff = 40;

        for(var i = 0; i < friendsData.length; i++) {
            var totalDiff = 0;
            for(var i2 = 0; i2 < friendsData[i].scores.length; i2++) {
                 var difference = Math.abs(newUser.scores[i2] - friendsData[i].scores[i2]);
                 totalDiff += difference
            }

            if(totalDiff < minDiff) {
                friendIndex = i;
                minDiff = totalDiff;
            }

        }

        friendsData.push(newUser);
        
        res.json(friendsData[friendIndex]);


    });
}