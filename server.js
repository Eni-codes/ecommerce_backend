import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
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



app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
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