const sendToken = async (user, statusCode, res) => {
  const token = await user.getJwtToken();
const sendToken = async (user, statusCode, res) => {
  const token = await user.getJwtToken();

 

  const options = {
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day
    httpOnly: true,
    secure: true, // must be true in production (HTTPS)
    sameSite: "none", // fine for same-site
    path: "/",
  };

  res.status(statusCode).cookie("token", token, options).json({
    sucess: true,
    user,
    token,
  });
};

module.exports = sendToken;


  res.status(statusCode).cookie("token", token, options).json({
    sucess: true,
    user,
    token,
  });
};

module.exports = sendToken;
