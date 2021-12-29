import bcrypt from "bcryptjs";

const users = [
   {
      name: "Admin User",
      email: "admin@icp.com",
      password: bcrypt.hashSync("123456", 10),
      isAdmin: true,
   },
   {
      name: "Yogendra Gurung",
      email: "yogendra.grg@icp.com",
      password: bcrypt.hashSync("123456", 10),
   },
   {
      name: "Final Project",
      email: "finale.prj@icp.com",
      password: bcrypt.hashSync("123456", 10),
   },
];

export default users;
