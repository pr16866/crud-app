import mongoose from "mongoose";
const schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    length: 10,
  },
  address: {
    type: String,
    required: true,
  }
});
const user = mongoose.model("user", schema);
export default user;
