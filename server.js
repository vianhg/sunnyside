const express = require('express');
const app = express();

// Serve all the files in '/dist' directory
app.use(express.static('dist'));


app.listen(process.env.PORT || 3000, function () {
  console.log('My app1 listening on port 3000 or' || process.env.PORT);
});