const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

mongoose.connect('mongodb+srv://rishabhmaurya7654:Rishabh9876@cluster0.fjxekgy.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log(err);
});


// Create a schema for the user
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: Number, required: true },
  option: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true });

// Create a model for the user
const Contact = mongoose.model('User', userSchema);

app.use(cors());

// Handle JSON data
app.use(express.json());

// Handle form data
app.use(express.urlencoded({ extended: true }));

// Handle static files
app.use(express.static('public'));

app.post('/api/contact', (req, res) => {
  console.log(req.body);
  const user = new Contact(req.body);
  user.save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('An error occurred while saving the user.');
    });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
