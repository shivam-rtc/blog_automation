exports.successResponse = (res, data, status = 200) => {
  return res.status(status).json({
    success: true,
    data,
  });
};

exports.errorResponse = (res, status = 500, message = "Something went wrong") => {
  return res.status(status).json({
    success: false,
    error: message,
  });
};
