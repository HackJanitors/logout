const express = require('express')
const { default: applyMiddleware } = require('./middlewares')
const adminRoutes = require('./controllers/admin')
const userRouters = require('./controllers/user')
const dashboardRoutes = require('./controllers/dashboard')

const app = express()
const port = 8000

applyMiddleware(app)

app.use('/admin', adminRoutes);
app.use('/dashboard', dashboardRoutes)
app.use('/user', userRouters)

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
})

