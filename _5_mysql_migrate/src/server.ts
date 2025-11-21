import express from 'express'
// import fs from 'fs'
// import { database } from './database'
import { schoolsRouter } from './router/schoolRouter'

const app = express()
const port = 3000

class Server {

    // already_migrated = false

    start = () => {
        app.use(express.json())

        // app.use(
        //     async (request, response, next) => {
        //         if (this.already_migrated) return next()
        //         try {
        //             const data = fs.readFileSync('./migration.sql', { encoding: 'utf-8' })
        //             await database.raw(data)

        //             this.already_migrated = true
        //             return next() 
        //         } catch (err) {
        //             console.log(err)
        //             response.sendStatus(500)
        //         }
        //     }
        // )

        app.use('/schools', schoolsRouter)

        app.listen(port, () => console.log(`Server has started on port: ${port}`))
    }
}

new Server().start()