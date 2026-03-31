import Course from "./Course.js";
import Category from "./Category.js";
import { FOREIGNKEYS } from "sequelize/lib/query-types";

//Relacion 1 a muchos
//una categoria tiene muchos cursos

Category.hasMany(Course, { foreignKey: "categoryID", onDelete: "CASCADE" });


//un curso pertenece a una categoria

Course.belongsTo(Category, {foreignKey: "categoryID"})

export {
    Category, Course
}