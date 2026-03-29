import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    default: ""
  },

  icon: {
    type: String,
    default: "Code2"
  },

  gradientFrom: {
    type: String,
    default: "#7c3aed"
  },

  gradientTo: {
    type: String,
    default: "#06b6d4"
  }

});

export default mongoose.model("Service", serviceSchema);