const mongoose = require("mongoose");
const page2Schema = mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    ratedCapacity: {
      type: Number,
      required: true,
    },
    ratedVoltageHV: {
      type: Number,
      required: true,
    },
    ratedVoltageLV: {
      type: Number,
      required: true,
    },
    ratedCurrentHV: {
      type: Number,
      required: true,
    },
    ratedCurrentLV: {
      type: Number,
      required: true,
    },
    ratedFrequency: {
      type: Number,
      required: true,
    },
    vectorGroup: {
      type: String,
      required: true,
    },
    positiveTaps: {
      type: Number,
      required: true,
    },
    negativeTaps: {
      type: Number,
      required: true,
    },
    steps: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("page2", page2Schema);
