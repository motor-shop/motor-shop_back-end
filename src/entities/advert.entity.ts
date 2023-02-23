import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
} from "typeorm";
import { Image } from "./image.entity";
import { Comment } from "./comment.entity";
import { User } from "./user.entity";

@Entity("advert")
export class Advert {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "boolean", default: true })
    is_selling: boolean;

    @Column({ type: "varchar", length: 50 })
    title: string;

    @Column({ type: "int" })
    year: number;

    @Column({ type: "int" })
    km: number;

    @Column({ type: "decimal", precision: 12, scale: 2 })
    price: number;

    @Column({ type: "varchar", length: 200 })
    description: string;

    @Column({ type: "boolean" })
    is_car: boolean;

    @Column({ type: "varchar" })
    cover_image: string;

    @Column({ type: "boolean", default: true })
    is_active: boolean;

    // @ManyToOne(() => User, (user) => user.adverts)
    // user: User;

    @OneToMany(() => Image, (image) => image.advert)
    images: Image[];

    @OneToMany(() => Comment, (comment) => comment.advert)
    comments: Comment[];
}
