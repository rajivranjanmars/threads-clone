import mongoose from "mongoose";

const communitySchema = new mongoose.Schema({
  id: { type: String, required: true },
  username: { type: String, required: true },
  name: { type: String, required: true },
  image: String,
  bio: String,
  createdBy:{typee:mongoose.Schema.Types.ObjectId, ref: "User"},
  threads: [{ type: mongoose.Schema.Types.ObjectId, ref: "Thread" }],
  onboarded: {
    type: Boolean,
    default: false,
  },
  members:[{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});
const Community = mongoose.models.User || mongoose.model("User", communitySchema);
export default Community;
