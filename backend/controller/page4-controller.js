const page4 = require("../model/page4-modal");
exports.createpage4Data = async (req, res) => {
  try {
    const result = await page4.create(req.body);

    res.status(200).json({
      success: true,
      message: "page4 Data Created Successfully",
      result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "page4 Data Not Created Successfully" + error,
      result: null,
    });
  }
};
exports.getAllpage4Data = async (req, res) => {
  try {
    const result = await page4.find();
    res.status(200).json({
      success: true,
      message: "page4 Data Get Successfully",
      result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "page4 Data Not Get Successfully" + error,
      result: null,
    });
  }
};
