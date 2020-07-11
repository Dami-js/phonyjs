import mongoose from "mongoose";
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now()
  }
});

const CatModel = mongoose.model("Cats", schema);

export { CatModel };
