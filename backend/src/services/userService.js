import { where } from "sequelize";
import db from "../models/index.js";
import bcrypt from "bcrypt";
import Users from "../models/user.js";
const salt = bcrypt.genSaltSync(10);
// function encript password
let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};
let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExit = await checkUserEmail(email);
      if (isExit) {
        // compare pass
        let user = await db.Users.findOne({
          where: { email: email },
        });
        if (user) {
          let check = await bcrypt.compareSync(password, user.password);
          if (check) {
            userData.errCode = 0;
            userData.errMessage = "Welcome";
          } else {
            userData.errCode = 1;
            userData.errMessage = "Password not true";
          }
        }
      } else {
        // return err
        userData.errCode = 1;
        userData.errMessage = "Your email not exist";
      }
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};
let checkUserEmail = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const [user] = await db.sequelize.query(
        "SELECT * FROM Users WHERE email = :email LIMIT 1",
        {
          replacements: { email: email },
          type: db.Sequelize.QueryTypes.SELECT, // ensures raw data is returned
        }
      );
      if (user) {
        resolve(true); // User exists
      } else {
        resolve(false); // User does not exist
      }
    } catch (error) {
      reject(error);
    }
  });
};
// chua dung ham nay
let compareUserPassword = () => {
  return new Promise((resolve, reject) => {
    try {
    } catch (e) {
      reject(e);
    }
  });
};

// let getUser = (userid) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       let users = "";
//       if (userid === "all") {
//         const [results, metadata] = await db.sequelize.query(
//           "SELECT * FROM Users"
//         );
//         users = results; // Dữ liệu trả về
//       }
//       if (userid && userid !== "all") {
//         const [results, metadata] = await db.sequelize.query(
//           "SELECT * FROM Users WHERE user_id = :userid",
//           {
//             replacements: { userid: userid },
//           }
//         );
//         users = results; // Chỉ cần người dùng đầu tiên (nếu có)
//       }

//       resolve(users);
//     } catch (e) {
//       console.error("Lỗi khi lấy dữ liệu người dùng:", e);
//       reject(e); // Đảm bảo reject lỗi để có thể xử lý từ bên ngoài
//     }
//   });
// };

// users/?

// users/:id

let getUser = (userid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = "";
      console.log(Users);

      // Fetch all users if `userid` is "all"
      if (userid === "all") {
        users = await Users.findAll(); // Fetch all users
      }

      // Fetch a specific user by `userid`
      if (userid && userid !== "all") {
        users = await Users.findAll({
          where: { user_id: userid }, // Use Sequelize `where` clause
        });
      }

      resolve(users);
    } catch (e) {
      console.error("Lỗi khi lấy dữ liệu người dùng:", e);
      reject(e); // Ensure the error is rejected for handling outside
    }
  });
};
let createUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      // check email
      let check = await checkUserEmail(data.email);

      //  ma hoa mat khau truoc khi gan
      if (check === true) {
        return resolve({
          errCode: 1,
          message: "Email already used",
        });
      }

      // await db.Users.create({
      //   email: data.email,
      //   username: data.username,
      //   password: data.password,
      //   phone_number: data.phone_number,
      //   date_of_birth: data.date_of_birth,
      //   role_id: data.role_id,
      // });

      // Insert user using raw SQL query
      await db.sequelize.query(
        `INSERT INTO Users (email, username, password, phone_number, date_of_birth, role_id)
         VALUES (:email, :username, :password, :phone_number, :date_of_birth, :role_id)`,
        {
          replacements: {
            email: data.email,
            username: data.name,
            password: data.password, // Consider hashing the password here before storing
            phone_number: data.phone,
            date_of_birth: data.date,
            role_id: 1,
          },
          type: db.Sequelize.QueryTypes.INSERT,
        }
      );
      resolve({
        errCode: 0,
        message: "OK",
      });
    } catch (e) {
      reject(e);
    }
  });
};

let editUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        return resolve({
          errCode: 2,
          message: " Missing required parameter !",
        });
      }

      // Check if the user exists
      const [user] = await db.sequelize.query(
        `SELECT * FROM Users WHERE user_id = :id`,
        {
          replacements: { id: data.id },
          type: db.sequelize.QueryTypes.SELECT,
        }
      );

      if (user) {
        // Update user details
        await db.sequelize.query(
          `UPDATE Users 
           SET email = :email, 
               username = :username, 
               password = :password, 
               phone_number = :phone_number, 
               date_of_birth = :date_of_birth, 
               role_id = :role_id
           WHERE user_id = :id`,
          {
            replacements: {
              email: data.email,
              username: data.name,
              password: data.password, // Consider hashing the password here before storing
              phone_number: data.phone,
              date_of_birth: data.date,
              role_id: 1,
              id: data.id,
            },
            type: db.sequelize.QueryTypes.UPDATE,
          }
        );

        resolve({
          errCode: 0,
          message: "update user successed!",
        });
      } else {
        resolve({
          errCode: 1,
          message: "User not found !",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let deleteUser = (userid) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Check if the user exists using a raw query
      let user = await db.sequelize.query(
        "SELECT * FROM Users WHERE user_id = :userid",
        {
          replacements: { userid: userid },
          type: db.Sequelize.QueryTypes.SELECT,
        }
      );

      if (user.length === 0) {
        return resolve({
          errCode: 2,
          errMessage: "User not exist!",
        });
      }

      // Delete the user using a raw query
      await db.sequelize.query("DELETE FROM Users WHERE user_id = :userid", {
        replacements: { userid: userid },
        type: db.Sequelize.QueryTypes.DELETE,
      });

      resolve({
        errCode: 0,
        message: "User is deleted!",
      });
    } catch (e) {
      rejecxt(e);
    }
  });
};

export { handleUserLogin, getUser, createUser, editUser, deleteUser };
