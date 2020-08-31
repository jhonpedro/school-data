import dotenv from 'dotenv'

dotenv.config()

import './database'

import express from 'express'
import HomeRoute from './routes/HomeRoutes'
import UserRoute from './routes/UserRoutes'
import SessionRoute from './routes/SessionRoutes'
import StudentRoute from './routes/StudentRoutes'
import PhotoRoute from './routes/PhotoRoutes'

class App {
  constructor() {
    this.app = express();
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
  }

  routes() {
    this.app.use(HomeRoute)
    this.app.use('/users', UserRoute)
    this.app.use('/session', SessionRoute)
    this.app.use('/students', StudentRoute)
    this.app.use('/photos', PhotoRoute)
  }
}

export default new App().app
