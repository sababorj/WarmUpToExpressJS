var http = require('http');
var fs = require('fs')

var port= 8080;

var server = http.createServer( (req,res) => {
    var path = req.url;

    switch(path){
        case '/':
        return displayHtml(req.url, req, res);
        case '/css':
        return displayCss(req.url, req, res);
        case '/fooobar':
        return res.end("Here is some foobar cake")
    }
})

server.listen(port, () => {
    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:" + port);
  });


function displayHtml(url, req, res){
    fs.readFile(`${__dirname}/myHtml.html`, (err, data)=> {
        if(err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
})
}
 function displayCss(url, req, res){
     fs.readFile(`${__dirname}/css.html`,(err, data) => {
         if (err) throw err;
         res.writeHead(200, {"Content_type":"text/html"});
         res.end(data);
     })
 }