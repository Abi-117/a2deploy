import mongoose from "mongoose";

const valueSchema = new mongoose.Schema({
  icon: {
    type: String,
    default: "Target"
  },
  title: String,
  desc: String,
  order: Number
},{timestamps:true});

export default mongoose.model("Value", valueSchema);