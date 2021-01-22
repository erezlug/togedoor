const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },

    messages: {
      type: Array,
      ref: "Messages",
    },

  },
  {
    timestamps: true,
  }
  
);

module.exports = mongoose.model("User", UserSchema);
