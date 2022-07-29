const mongoose = require("mongoose");

// Signup schema
const registerSchema = mongoose.Schema({
  Surname: {
    type: String,
    required: true,
  },

  Givenname: {
    type: String,
    required: true,
  },

  DateofBirth: {
    type: Date,
    required: true,
  },

  PlaceofResidence: {
    type: String,
    required: true,
  },

  Occupation: {
    type: String,
    required: true,
    },
  
  Nationality: {
    type: String,
    required: true,
  },
  
  Gender: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Register", registerSchema);
