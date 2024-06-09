import { createPool } from 'mysql2/promise'
import dotenv from 'dotenv'
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from '../../config.js'

dotenv.config({path:'./src/env/.env'})

export const pool = createPool({
    host:'roundhouse.proxy.rlwy.net', 
    user:'root',
    password:'hyMFaEXhckCYJsVeZkBKHQARgtsSiFcP',
    port:'10092',
    database:'railway'
})