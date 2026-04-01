import { Course, Category } from "../models/index.js";

export const home = async (req, res) => {
  try {
    const courses = await Course.findAll({ raw: true });
    res.render("home", {
      courses,
    });
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
    const categories = await Category.findAll({ raw: true });
    res.render("formCourse", {
      categories,
    });
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

//5. Eliminar los cursos

export const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    await Course.destroy({ where: { id } });
    res.redirect("/");
  } catch (error) {
    console.error("Error al eliminar", error);
    res.status(500).send("Error al eliminar el curso");
  }
};

//6. Formulario para editar un curso

export const getEditCourseForm = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findByPk(id, { raw: true });
    const categories = await Category.findAll({ raw: true });
    if (!course)
      return res.status(500).render("error", {
        message: "Curso no Existe",
      });

    res.render("formEdit", {
      course,
      categories,
    });
  } catch (error) {
    console.error("Error al cargar la edición", error);
    res.status(500).send("Error Interno al Cargar Formulario");
  }
};

//7. Actualizar los datos de los cursos a editar

export const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price, categoryId } = req.body;
    await Course.update(
      { title, description, price, categoryId },
      { where: { id } },
    );
    res.redirect('/')
  } catch (error) {
    console.error("error al actualizar curso", error)
    res.status(500).render('Error',{
      message: 'Error para guardar los datos'
    })
  }
};

export const getCategory = async(req, res)=>{
  try {
     const categories = await Category.findAll({ raw: true });
    res.render('category',{
      categories
    })
  } catch (error) {
    console.error("error al mostrar categorias", error)
    res.render('error',{
      message: "Error al mostrar categorias"
    })
  }
}
