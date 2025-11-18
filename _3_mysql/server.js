const express = require('express')
const pool = require('./db')
const port = 3000
const app = express()
const fs = require('fs')

class Server {

    already_migrated = false

    start = () => {
        app.use(express.json())

        app.use(
            async (req, res, next) => {
                if (this.already_migrated) return next()
                try {
                    const data = fs.readFileSync('./migration.sql', { encoding: 'utf-8' })
                    await pool.query(data)
                    this.already_migrated = true
                    return next() 
                } catch (err) {
                    console.log(err)
                    res.sendStatus(500)
                }
            }
        )

        app.get('/', async (req, res) => {
            try {
                const data = await pool.query('SELECT * FROM schools')
                res.status(200).send(data[0])
            } catch (err) {
                console.log(err)
                res.sendStatus(500)
            }
        })

        app.post('/', async (req, res) => {
            const { name, location } = req.body
            try {
                await pool.query('INSERT INTO schools (name, address) VALUES (?, ?)', [name, location])
                res.status(200).send({ message: "Successfully added child" })
            } catch (err) {
                console.log(err)
                res.sendStatus(500)
            }
        })

        app.listen(port, () => console.log(`Server has started on port: ${port}`))
    }
}

new Server().start()