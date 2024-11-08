import {
  createUser,
  deleteUser,
  editUser,
  getUser,
  handleUserLogin,
} from "../services/userService.js";
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
const handleGetUser = async (req, res) => {
  let id = req.query.id; // all , id
  let users = await getUser(id);
  return res.status(200).json({
    errCode: 0,
    errMessage: "OK",
    users,
  });
};
const handleCreateUser = async (req, res) => {
  let message = await createUser(req.body);
  console.log(message);
  return res.status(200).json(message);
};

const handleEditUser = async (req, res) => {
  let data = req.body;
  let message = await editUser(data);
  return res.status(200).json(message);
};

const handleDeleteUser = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing required parameter id !",
    });
  }
  let message = await deleteUser(req.body.id);
  return res.status(200).json(message);
};
export {
  handleLogin,
  handleGetUser,
  handleCreateUser,
  handleDeleteUser,
  handleEditUser,
};
