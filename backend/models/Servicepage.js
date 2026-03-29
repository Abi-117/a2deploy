import mongoose from "mongoose";

const servicepageSchema = new mongoose.Schema(
{
  title: {
    type: String,
    required: true,
    trim: true
  },

  desc: {
    type: String,
    default: "",
    trim: true
  },

  icon: {
    type: String,
    default: "Code2"
  },

  color: {
    type: String,
    default: "from-neon-purple to-neon-blue"
  },

  features: {
    type: [String],
    default: []
  },
  order: {
    type: Number,
    default: 0
  }
},
{ timestamps: true }
);

export default mongoose.model("Servicepage", servicepageSchema);