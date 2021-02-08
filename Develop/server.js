//dependencies 

const mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan");

// PORT

const PORT = process.env.PORT || 3000 ;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));



app.listen(PORT, () => {

    console.log(`Application is running on http://localhost:${PORT}`);

});


mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/fitnesstracker',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );