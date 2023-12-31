import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import dotenv from "dotenv"
dotenv.config()

export const AppDataSource = new DataSource({

    // เขียนแบบนี้เพื่อให้เราสามารถเชื่อมต่อกับฐานข้อมูลได้ แต่ไม่ปลอดภัยเพราะมีการเก็บข้อมูลเชื่อมต่อฐานข้อมูลไว้ในโค้ด
    // type: "postgres",
    // host: "localhost",
    // port: 5432,
    // username: "postgres",
    // password: "mysecretpassword",
    // database: "demo-typeorm",
    // synchronize: true,
    // logging: false,
    // entities: [User],
    // migrations: [],
    // subscribers: [],

    // เขียนแบบนี้ปลอดภัยขึ้นเพราะเราไม่ได้เก็บข้อมูลเชื่อมต่อฐานข้อมูลไว้ในโค้ด แต่เราจะเก็บไว้ในไฟล์ .env แทน
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT as string),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
    
})

  