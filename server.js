const express = require('express');
const Pizza = require('./models/pizzaModel');
const db = require('./db');
const app = express();
app.use(express.json());

const pizzasRoute = require('./routes/pizzaRoutes');
const userRoute = require('./routes/userRoute');

app.use('/api/pizzas', pizzasRoute);

app.use('/api/pizzas/', pizzasRoute);
app.use('/api/users/', userRoute);

app.get('/', (req, res) => {
  res.send('Server Working');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
