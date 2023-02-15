import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    username: string

    @Column({ nullable: false})
    email: string

    @Column({ nullable: false })
    password: string

    @Column({ default: true })
    isActive: boolean
}