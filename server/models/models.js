const sequelize = require('../db')
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  full_name: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "User" },
});

const Basket = sequelize.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BasketDrug = sequelize.define("basket_drug", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Drug = sequelize.define("drug", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
});

const Type = sequelize.define("type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const DrugInfo = sequelize.define("drug_info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

User.hasOne(Basket);
Basket.belongsTo(User);

Basket.hasMany(BasketDrug);
BasketDrug.belongsTo(Basket);

Type.hasMany(Drug);
Drug.belongsTo(Type);

Drug.hasMany(BasketDrug);
BasketDrug.belongsTo(Drug);

Drug.hasMany(DrugInfo, { as: "info" });
DrugInfo.belongsTo(Drug);

module.exports = {
  User,
  Basket,
  BasketDrug,
  Drug,
  Type,
  DrugInfo,
};
