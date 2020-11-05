const express = require('express');
const path = require('path')
const app = express();
const contDB = require('../controllers/db.js')


const port = 8000;
const distrobution = path.join(__dirname,'..','client/dist')
app.use(express.static(distrobution))
app.use(express.json());

app.get('/movies', contDB.get)

app.post('/movies', contDB.post)

app.patch('/movies', contDB.patch)

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`express is now listening on port: ${port}`)
  }
});
