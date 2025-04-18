const sendToken = async (user, statusCode, res) => {
  const token = await user.getJwtToken();
const sendToken = async (user, statusCode, res) => {
  const token = await user.getJwtToken();

 

  const options = {

  httpOnly: true,
  secure: true,           // ✅ Because you're on HTTPS
  sameSite: 'none',       // ✅ Required for cross-domain cookies
  path: '/',
  expires: new Date(Date.now() + 24 * 60 * 60 * 1000),

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
