import mongoose from "mongoose";

const ourStorySchema = new mongoose.Schema({
  badgeText: {
    type: String,
    default: "Our Story"
  },
  title: {
    type: String,
    default: "From a Small Idea to a Global Agency"
  },
  highlightText: {
    type: String,
    default: "Global Agency"
  },
  paragraph1: String,
  paragraph2: String
});

export default mongoose.model("OurStory", ourStorySchema);