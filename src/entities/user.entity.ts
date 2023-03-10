import { Exclude } from "class-transformer";
import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    Column,
    OneToOne,
    JoinColumn,
    OneToMany,
} from "typeorm";
import { Adress } from "./adress.entity";
import { Advert } from "./advert.entity";
import { Comment } from "./comment.entity";

@Entity("user")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 50, unique: true })
    username: string;

    @Column({ length: 100, unique: true })
    email: string;

    @Column({ length: 14, unique: true })
    cpf: string;

    @Column({ length: 50 })
    cellphone: string;

    @CreateDateColumn()
    birth_at: Date;

    @Column({ length: 250 })
    description: string;

    @Column({ length: 150 })
    @Exclude()
    password: string;

    @Column({ length: 150 })
    @Exclude()
    confirm_password: string;

    @Column({ nullable: true })
    token_reset_password: string;

    @Column({ default: false })
    is_seller: boolean;

    @OneToOne(() => Adress, {eager: true})
    @JoinColumn()
    adress: Adress;

    @OneToMany(() => Advert, (advert) => advert.user)
    adverts: Advert[];

    @OneToMany(() => Comment, (comment) => comment.user)
    comments: Comment[];
}
