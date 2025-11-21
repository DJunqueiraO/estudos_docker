
import fs from 'fs'
import { database } from '../src/database'

async function migrate() {
    console.log('Starting migration...')
    const data = fs.readFileSync('./scripts/migration.sql', { encoding: 'utf-8' })
    await database.raw(data)
}

migrate().then(() => {
    console.log('Migration finished!')
    process.exit(0)
}).catch((err) => {
    console.log('Migration failed!')
    console.log(err)
    process.exit(1)
})
