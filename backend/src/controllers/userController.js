import { handleUserLogin } from "../services/userService.js";
let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  // check null , empty , undefine
  if (!email || !password) {
    return res.status(500).json({
      errcode: 1,
      message: "Missing inputs",
    });
  }

  let userData = await handleUserLogin(email, password);
  return res.status(200).json({
    userData,
  });
};

export { handleLogin };
