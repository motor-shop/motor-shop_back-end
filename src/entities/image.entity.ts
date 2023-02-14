import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Advert } from "./advert.entity";

@Entity("image")
export class Image {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    url: string;

    @ManyToOne(() => Advert, (advert) => advert.images)
    advert: Advert;
}
