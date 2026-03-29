import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
  badge: {
    type: String,
    default: "Who We Are"
  },

  title: {
    type: String,
    default: ""
  },

  highlight: {
    type: String,
    default: ""
  },

  paragraph1: {
    type: String,
    default: ""
  },

  paragraph2: {
    type: String,
    default: ""
  },

  highlights: [
    {
      text: String
    }
  ],

  typingTexts: [
    {
      text: String
    }
  ]
});

export default mongoose.model("About", aboutSchema);