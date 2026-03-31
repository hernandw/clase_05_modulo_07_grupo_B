import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Course = sequelize.define(
  "courses",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true, //crear una columna llamada createAt y updateAT
  },
);

export default Course;
