import express from 'express'
import exphbs from 'express-handlebars'
import courseRoutes from './routes/courseRoutes.js'
import db from './config/db.js'

import path from 'path'

const __dirname = path.resolve()


const app = express()

const PORT = process.env.PORT || 3005

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

//Static Files
app.use(express.static(path.join(__dirname, 'src/public')))

//Sincronización de BBDD
const connectDB = async()=>{
    try {
        await db.sync()
        console.log("✅ Base de Datos Sincronizada")
    } catch (error) {
        console.error("❌ Error general", error)
    }
}
connectDB()

//Configuración de HBS
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'src/views'))

app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'src/views/layouts'),
    extname: '.hbs'
}))

//Rutas
app.use('/', courseRoutes)

app.listen(PORT, ()=>{
console.log(`🚀 Servidor corriendo en el puerto http://localhost:${PORT}`)
})

