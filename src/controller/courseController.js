

export const home = (req, res)=>{
    try {
        res.render('home')
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al cargar el Servidor', error)
    }
}