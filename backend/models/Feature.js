import mongoose from "mongoose";

const featureSchema = new mongoose.Schema({
  icon: {
    type: String,
    default: "Zap"
  },
  title: {
    type: String,
    default: ""
  },
  desc: {
    type: String,
    default: ""
  }
});

export default mongoose.model("Feature", featureSchema);