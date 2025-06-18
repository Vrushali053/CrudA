const { Sequelize } = require("sequelize");
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = require("../config/dbConfig");

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./User")(sequelize, Sequelize);
db.Task = require("./Task")(sequelize, Sequelize);

// FK: One User -> Many Tasks
db.User.hasMany(db.Task, { onDelete: "CASCADE" });
db.Task.belongsTo(db.User);

module.exports = db;
