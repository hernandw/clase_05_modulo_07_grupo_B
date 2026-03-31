import { Course, Category } from "../models/index.js";

export const home = (req, res) => {
  try {
    res.render("home", {});
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al cargar el Servidor", error);
  }
};

//1. Mostrar el formulario para crear la categoria
export const getCreateCategoryForm = async (req, res) => {
  try {
    res.render("formCategory");
  } catch (error) {
    console.error("Error al cargar formulario:", error);
    res.status(500).send("Error interno");
  }
};

//2. Guardar la category en la BBDD

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    await Category.create({ name });
    res.redirect("/create"); //vuelve a la página de crear curso
  } catch (error) {
    console.error("Error al crear categoria:", error);
    res.status(500).send("Error al guardar categoria");
  }
};

//3. Mostrar el formulario de cursos
export const getCreateCourseForm = async (req, res) => {
  try {
    res.render("formCourse");
  } catch (error) {
    console.error("Error al cargar formulario:", error);
    res.status(500).send("Error interno");
  }
};

//4. Guardar el formulario de los cursos

export const createCourse = async (req, res) => {
  try {
    const { title, description, price, categoryID } = req.body;
    await Course.create({ title, description, price, categoryID });
    res.redirect("/"); //vuelve a la página principal
  } catch (error) {
    console.error("Error al crear categoria:", error);
    res.status(500).send("Error al guardar categoria");
  }
};
