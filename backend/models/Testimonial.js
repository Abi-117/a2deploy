import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  name: String,
  role: String,
  text: String,
}, { timestamps: true });

export default mongoose.model("Testimonial", testimonialSchema);