const express = require('express');

var app = express();

app.get('/', (req, res) => {
    // res.send('<h1>Hello express!</h1>');
    res.send({
      name:"Damian",
      likes: [
        'Emotions',
        'JS'
      ]
    });
});

app.get('/about', (req, res) => {
  res.send('<p>About Page</p>');

});

app.get('/bad', (req, res) => {
  res.send({error:true,
            errorMessage: 'Unable to handle request',
  });
});

app.listen(3000);
