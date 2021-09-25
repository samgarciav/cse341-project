const fs = require('fs');

const users = ['Alex', 'Cons', 'Max'];

const requestHandler = (req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-type', 'text/html');
    res.write(`<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prove 01</title>
    </head>
    <body>
    <h1>Prove 01</h1>
    <form action="/create-user" method="POST">
              <label>Enter new user: <input type="text" name="newUser"></label>
              <button type="submit">Send</button>
              </form>
    </body>
    </html>`);
    return res.end();
  }

  if (req.url === '/users') {
    res.setHeader('Content-type', 'text/html');
    res.write(`<html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Users</title>
    </head> 
    <body>
      <main>
        <h1>P01 Users</h1>
        <p>Greeting!</p>
      </main>
      <ul>`);
    users.forEach(user => {
      res.write(`<li>${user}</li>`);
    });
    res.write(`</ul>
    </body >
    </html > `);
    return res.end();
  }

  if (req.url === "/create-user" && req.method === 'POST') {
    const body = [];
    req.on('data', chunk => {                // data event. 2nd arg-> the function executed for every incoming new data 
      body.push(chunk);                      // push that chunk in the body array (array of buffered chunks)
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();    //combination of many chunks in one big buffer
      // console.log(parsedBody);  //newUser=what ever I input
      const newUser = parsedBody.split("=")[1];
      console.log(newUser);
      users.push(newUser);
      console.log(users);
    });
    res.statusCode = 302;
    res.setHeader('Location', "/users");
    res.end();
  }
};

exports.handler = requestHandler;
