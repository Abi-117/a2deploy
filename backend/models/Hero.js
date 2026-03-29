import mongoose from "mongoose";

const heroSchema = new mongoose.Schema(
{
  badgeText: String,
  title: String,
  highlightText: String,
  description: String,
  typingTexts: [String],

  button1Text: String,
  button1Link: String,

  button2Text: String,
  button2Link: String,

  button3Text: String,
  button3Link: String,

  /* 🔥 ADD THESE FIELDS */

  titleColor: String,
  highlightColor: String,
  descriptionColor: String,

  titleSize: Number,
  descSize: Number,

  align: String
},
{ timestamps: true }
);

export default mongoose.model("Hero", heroSchema);