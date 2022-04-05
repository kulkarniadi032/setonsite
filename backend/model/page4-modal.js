const mongoose = require("mongoose");
const page4Schema = mongoose.Schema(
  {
    HVE15: {
      type: Number,
      required: true,
    },
    LVE15: {
      type: Number,
      required: true,
    },
    HVLVE15: {
      type: Number,
      required: true,
    },
    HVE60: {
      type: Number,
      required: true,
    },
    LVE60: {
      type: Number,
      required: true,
    },
    HVE600: {
      type: Number,
      required: true,
    },
    LVE600: {
      type: Number,
      required: true,
    },
    HVLV600: {
      type: String,
      required: true,
    },
    PIHV: {
      type: Number,
      required: true,
    },
    PILV: {
      type: Number,
      required: true,
    },
    PIHVLV: {
      type: Number,
      required: true,
    },
    DIHV: {
      type: Number,
      required: true,
    },
    DILV: {
      type: Number,
      required: true,
    },
    DIHVLV: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("page4", page4Schema);
