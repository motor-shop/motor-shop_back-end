import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Adress {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 9 })
  zip_code: string;

  @Column({ length: 50 })
  state: string;

  @Column({ length: 50 })
  city: string;

  @Column({ length: 50 })
  street: string;

  @Column()
  house_number: number;

  @Column({ length: 50 })
  complement: string;
}
