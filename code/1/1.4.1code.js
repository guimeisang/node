/**
 * Created by lenovo on 2016-11-04 .
 */
var https = require("https");
var fs = require('fs');
var options = {
    host: 'jira.example.com',
    path: '/secure/attachment/206906/update.xlsx'
};

https.get(options, function (http_res) {

    var data = "";


    http_res.on("data", function (chunk) {

        data += chunk;
    });


    http_res.on("end", function () {

        var file = fs.createWriteStream("file.xlsx");
        data.pipe(file);

    });
});
