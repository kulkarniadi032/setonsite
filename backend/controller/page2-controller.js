const Page2 = require("../model/page2-modal");
exports.createPage2Data = async (req, res) => {
  try {
    const result = await Page2.create(req.body);

    res.status(200).json({
      success: true,
      message: "Page2 Data Created Successfully",
      result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Page2 Data Not Created Successfully" + error,
      result: null,
    });
  }
};
exports.getAllPage2Data = async (req, res) => {
  try {
    const result = await Page2.find();
    res.status(200).json({
      success: true,
      message: "Page2 Data Get Successfully",
      result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Page2 Data Not Get Successfully" + error,
      result: null,
    });
  }
};
