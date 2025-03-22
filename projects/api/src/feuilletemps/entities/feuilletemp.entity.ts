import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name : "feuilletemps"})
export class Feuilletemp {
    @PrimaryGeneratedColumn()
    idfeuille: number;
    @Column()
    heure: number;
}
