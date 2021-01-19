const { Sequelize, Op, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("postgres");

// const User = sequelize.define("user", {
//   username: {
//     type: DataTypes.TEXT,
//     allowNull: false,
//     unique: true,
//     validate: {
//       notNull: {
//         msg: "Please enter your name"
//       },
//       notEmpty: {
//         msg: "Can't be empty"
//       }
//     }
//   },
//   hashedPassword: {
//     type: DataTypes.STRING(64),
//     is: /^[0-9a-f]{64}$/i
//   }
// });

// (async () => {
//   await sequelize.sync({ force: true });
//   // Code here
// })();