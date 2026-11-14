const express = require('express');
const router = require('./routes/appRouter.js'); 
const app = express();
const port = 3000;

 
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.use(express.json());
app.use(`/` , router);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
 