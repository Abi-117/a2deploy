import mongoose from "mongoose";

const aboutHeroSchema = new mongoose.Schema({
  badgeText: {
    type: String,
    default: "About Us"
  },
  title: {
    type: String,
    default: "Crafting Digital Excellence"
  },
  highlightText: {
    type: String,
    default: "Excellence"
  },
  description: {
    type: String,
    default:
      "A Square Solutions is a forward-thinking digital agency specializing in web development, digital marketing, and brand strategy."
  }
}, { timestamps: true });

export default mongoose.model("AboutHero", aboutHeroSchema);