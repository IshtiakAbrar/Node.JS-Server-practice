const http = require('http');
const fs= require('fs');

const server= http.createServer((req, res)=>{
    
    
    if (req.url == "/"){
        res.writeHead(200, {'Content-Type' :'text/html'});
        fs.readFile('index.html', function(error, data){
            res.write(data);
            res.end();
        });
        
    }

    else if (req.url == '/about'){
        res.writeHead(200, {'Content-Type' :'text/html'})
    
        fs.readFile('about.html', function(error, data){
            res.write(data);
            res.end();
        });
        
    }

    else if (req.url == '/contact'){
        res.writeHead(200, {'Content-Type' :'text/html'})
        
        fs.readFile('contact.html', function(error, data){
            res.write(data);
            res.end();
        });

    }

    else if(req.url== '/file-write'){

        
        fs.writeFile('demo.txt','hello world', function(error){

            if (error){
                res.writeHead(200, {'Content-Type' :'text/html'});
                res.write("File write failed");
                
        
                
                fs.readFile('writeFile.html', function(error, data){
                    res.write(data);
                    res.end();
                });
                
               
            }
            else {
                res.writeHead(200, {'Content-Type' :'text/html'});
                res.write("<h1>File write success</h1>");
                
        
               
                fs.readFile('writeFile.html', function(error, data){
                    res.write(data);
                    res.end();
                });
               
            }
        });

    }

})

server.listen(3000, ()=>{
    console.log('Server is running...')
})