// เรียกใช้งาน AppDataSource ที่เราสร้างไว้
import { AppDataSource } from "./data-source"

// เรียกใช้งาน Entity ที่เราสร้างไว้ โดยในที่นี้เป็น User
import { User } from "./entity/User"

// method initialize() จะทำการเชื่อมต่อกับฐานข้อมูล และทำการสร้างตารางให้ตาม Entity ที่เราสร้างไว้
AppDataSource.initialize().then(async () => {

    // ทดสอบการเชื่อมต่อฐานข้อมูล โดยการ Insert ข้อมูลใหม่ลงในตาราง User
    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25
    await AppDataSource.manager.save(user) // บันทึกข้อมูลลงในฐานข้อมูล
    console.log("Saved a new user with id: " + user.id) // แสดงผล id ของข้อมูลที่เพิ่มเข้าไปในฐานข้อมูล

    console.log("Loading users from the database...") 
    const users = await AppDataSource.manager.find(User)// ดึงข้อมูลทั้งหมดในตาราง User ออกมา
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
