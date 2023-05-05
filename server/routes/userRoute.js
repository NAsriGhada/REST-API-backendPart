
// const userControllers = require("../controllers/userController");
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");


const allUserRoutes = (app) => {
//   console.log("what is inside app", app);
  app.post("/api/add/user", createUser);
  app.get("/api/get/users", getAllUsers);
  app.put("/api/edit/user/:id", updateUser);
  app.delete("/api/delete/user/:id", deleteUser);
};

module.exports = allUserRoutes;