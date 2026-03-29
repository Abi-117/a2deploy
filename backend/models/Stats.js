import mongoose from "mongoose";

const statsSchema = new mongoose.Schema({
  value: {
    type: Number,
    default: 0
  },
  suffix: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: ""
  }
});

export default mongoose.model("Stats", statsSchema);