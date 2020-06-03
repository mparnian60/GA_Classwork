const express = require('express'); //from documentation: express is function
const app = express();//app is an object

//homepage
app.get('/', (request, response) => {
    response.send(`
    <!DOCTYPE html>
    <html>
    <head>    
        <title>Yay Webpages</title>
    </head>
    <body>
        <h1>Created from Node JS backend running express JS</h1>

        <input type='text' id='inp-hello'>
        <button type='button' id='btn-hello'>say hello</button>

        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script>
            $('#btn-hello').on('click', ()=> {
                const hello = $('#inp-hello').val();
                $.ajax('http://localhost:3000/hello/' + hello)
                .then((data) =>{
                    console.log(data);
                    $('body').append(data);
                })
            })
        </script>
    </body>
    </html>`);
});

app.get('/ping', (request, response) => {
    response.send('pong pong pong');
});

app.get('/hello/:name', (request, response) => {
    response.send('hello there ' + request.params.name);
});

app.listen(3000, ()=>{
    console.log("I am listening");
});