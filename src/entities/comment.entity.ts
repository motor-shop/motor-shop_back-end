import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Advert } from "./advert.entity";

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
}
