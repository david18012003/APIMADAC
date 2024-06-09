import { createPool } from 'mysql2/promise'
import dotenv from 'dotenv'
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from '../../config'

dotenv.config({path:'./src/env/.env'})

export const pool = createPool({
    host:DB_HOST, 
    user:DB_USER,
    password:DB_PASSWORD,
    port:DB_PORT,
    database:DB_DATABASE
})