import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Adress {
  @PrimaryGeneratedColumn("uuid")
  id: string;
}
