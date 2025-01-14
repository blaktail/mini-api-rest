const express = require('express')
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const { swaggerDocs } = require('./swagger')

const app = express()

app.use(express.json())

app.use('/', userRoutes)

const PORT = process.env.PORT || 3000

sequelize.sync().then(() => {
    console.log('base de datos sincronizada');
    app.listen(PORT, () => {
        console.log(`servidor ejecutandose en el puerto ${PORT}`);
        swaggerDocs(app, PORT)
    })

}).catch(error => {
    console.warn('Error al sincronizar la base de datos: ',error)
})