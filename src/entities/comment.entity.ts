import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Advert } from "./advert.entity";
import { User } from "./user.entity";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    comment: string;

    @Column()
    created_at: Date;

    @ManyToOne(() => Advert, (advert) => advert.comments)
    advert: Advert;

    @ManyToOne(() => User, (user) => user.comments)
    user: User;
}
