import mongoose from "mongoose";

const processSchema = new mongoose.Schema(
{
  title: {
    type: String,
    required: true
  },

  desc: String,

  details: {
    type: [String],
    default: []
  },

  icon: {
    type: String,
    default: "Lightbulb"
  },

  order: {
    type: Number,
    default: 0
  },

  active: {
    type: Boolean,
    default: true
  }
},
{ timestamps: true }
);

export default mongoose.model("ProcessStep", processSchema);