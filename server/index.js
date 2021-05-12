const express = require('express');
const path = require('path')
const app = express();


const port = 8000;
const dist = path.join(__dirname,'..','client/dist')
app.use(express.static(dist))

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`express is now listening on port: ${port}`)
  }
});
