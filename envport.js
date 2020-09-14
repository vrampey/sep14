var exp = require("express");
var app = exp();

app.get("/", function(req, res){
    res.send("<html><body><h1>you called root path>/h1></body></html>");
    
});

app.get("/download", function(req, res){
    res.download("./package.json", function name(){
        console.log("download is over");
        
    });
    
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("server is ON at " + port);
    
});