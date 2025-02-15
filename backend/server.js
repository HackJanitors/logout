const express = require('express')
const { default: applyMiddleware } = require('./middlewares')
const adminRoutes = require('./controllers/admin')
const dashboardRoutes = require('./controllers/dashboard')

const app = express()
const port = 8000

app.use(applyMiddleware())

app.use('/admin', adminRoutes);
app.use('/dashboard', dashboardRoutes)

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
})

