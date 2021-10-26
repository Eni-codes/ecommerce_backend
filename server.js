import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import userRouter from './routers/userRouter.js';
import {} from "dotenv/config";





const app = express();
// mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/hairsoofine', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// });

mongoose.connect("mongodb+srv://Moj78ade:Moj78ade@cluster0.285h9.mongodb.net/hairsoofine?retryWrites=true&w=majority", {
  // useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
}, ()=> { console.log("Mongodb Connected!")});

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

app.get('/api/products', (req, res) => {
  res.send(data.products);
});
app.use('/api/users', userRouter);
app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
})