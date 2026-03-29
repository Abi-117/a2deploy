import mongoose from "mongoose";

const pricingSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: true
  },

  price: {
    type: String,
    default: "Custom"
  },

  desc: {
    type: String,
    default: ""
  },

  features: {
    type: [String],
    default: []
  },

  popular: {
    type: Boolean,
    default: false
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

export default mongoose.model("Pricing", pricingSchema);