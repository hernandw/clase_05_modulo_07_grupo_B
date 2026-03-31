import express from 'express'
import { home, getCreateCategoryForm, getCreateCourseForm, createCategory, createCourse } from '../controller/courseController.js'


const router = express.Router()

router.get('/', home)


router.get('/category', getCreateCategoryForm)
router.post('/create-category', createCategory)


router.get('/create', getCreateCourseForm)
router.post('/create-course', createCourse)


export default router