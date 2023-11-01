
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

// Entity ที่เราสร้างไว้ โดยในที่นี้เป็น User    
@Entity()
export class User {// สร้าง Entity ชื่อ User โดยมี property ดังนี้

    @PrimaryGeneratedColumn()// กำหนดให้ property id เป็น Primary Key และเป็น Auto Increment
    id: number// กำหนดให้ property id เป็นชนิด number

    @Column()
    firstName: string // กำหนดให้ property firstName เป็นชนิด string

    @Column()
    lastName: string // กำหนดให้ property lastName เป็นชนิด string

    @Column()
    age: number// กำหนดให้ property age เป็นชนิด number

}
