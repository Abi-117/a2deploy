import mongoose from "mongoose";

const milestoneSchema = new mongoose.Schema({
  year: String,
  title: String,
  desc: String,
  order: Number
});

export default mongoose.model("Milestone", milestoneSchema);