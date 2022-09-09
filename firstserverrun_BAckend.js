//use html code and run on server


const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Alignment</title>
      <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet">
      <style>
          * {
              box-sizing: border-box;
          }
  
          body {
              font-family: 'Ubuntu', sans-serif;
          }
  
          .container {
              width: 900px;
              border: 3px solid purple;
              background-color: rgb(250, 226, 205);
              margin: 33px auto;
          }
  
          .item {
              border: 3px solid grey;
              margin: 12px 3px;
              padding: 12px 3px;
              background: rgb(248, 238, 238);
          }
  
          #fruit {
              float: right;
              width: 48%;
          }
  
          #computer {
              float: left;
              width: 48%;
          }
  
          #stationary {
              /* float: left; */
              clear: both;
              clear: left;
              width: 100%;
          }
  
          p, h3 {
              /* text-align: right;
              text-align: left;
              text-align: center; */
              text-align: justify;
          }
  
          h1 {
              margin: 23px auto;
              width: 455px;
          }
      </style>
  </head>
  
  <body>
      <div class="container">
          <h1> Welcome to my store </h1>
          <div id="fruit" class="item">
              <h3>Fruits</h3>
              <p id="fruitpara" class="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
                  quibusdam explicabo, porro magnam quas sint enim cumque minima odit cupiditate ex itaque, eaque
                  distinctio sed ipsam totam, nihil tenetur. Recusandae. Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Aspernatur fugiat iusto vel. Qui, veniam nam, enim dolore deleniti dignissimos
                  veritatis tenetur animi sunt voluptatem laboriosam, nihil inventore molestias totam. Quas ducimus
                  quibusdam quaerat necessitatibus.</p>
          </div>
          <div id="computer" class="item">
              <h3>Computer</h3>
              <p id="computerpara" class="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
                  quibusdam explicabo, porro magnam quas sint enim cumque minima odit cupiditate ex itaque, eaque
                  distinctio sed ipsam totam, nihil tenetur. Recusandae. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Rerum commodi vitae exercitationem necessitatibus laboriosam corporis dicta, eveniet
                  architecto reprehenderit eum id repudiandae deleniti fugiat fugit inventore ea dolorum neque amet nulla
                  vero culpa. Accusamus.</p>
          </div>
          <div id="stationary" class="item">
              <h3>Stationary</h3>
              <p id="stationarypara" class="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
                  quibusdam explicabo, porro magnam quas sint enim cumque minima odit cupiditate ex itaque, eaque
                  distinctio sed ipsam totam, nihil tenetur. Recusandae.</p>
          </div>
          <div id="glasses" class="item">
              <h3>Stationary</h3>
              <p id="glassespara" class="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
                  quibusdam explicabo, porro magnam quas sint enim cumque minima odit cupiditate ex itaque, eaque
                  distinctio sed ipsam totam, nihil tenetur. Recusandae.</p>
          </div>
      </div>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});