// models/Click.js
import mongoose from "mongoose";

const ClickSchema = new mongoose.Schema({
  buttonClicked: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Click || mongoose.model("Click", ClickSchema);
