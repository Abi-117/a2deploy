import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: true
  },

  role: {
    type: String,
    required: true
  },

  desc: {
    type: String,
    default: ""
  },

  icon: {
    type: String,
    default: "Users"
  }
},
{ timestamps: true }
);

export default mongoose.model("Team", teamSchema);