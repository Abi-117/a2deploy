import mongoose from "mongoose";

const techSchema = new mongoose.Schema({
  name: String,
  type: {
    type: String,
    enum: ["stack1", "stack2"], // 2 marquees
    default: "stack1"
  }
});

export default mongoose.model("TechStack", techSchema);