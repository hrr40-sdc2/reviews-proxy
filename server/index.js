const express = require('express');
const app = express();
const port = 3030;


app.use(express.static('./client'));
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
