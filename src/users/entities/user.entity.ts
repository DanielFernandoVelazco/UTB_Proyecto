import { Product } from "src/products/entities/product.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

export enum Role {
    User = 'user',
    Admin = 'admin',
}

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid();

    @Column({
        length: 100,
    })
    name: string;

    @Column({ nullable: true })
    password: string;

    @Column()
    email: string;

    @Column()
    address: string;

    @Column()
    phone: string;

    @Column({ nullable: true })
    coutry: string;

    @Column({ nullable: true })
    city: string;

    @ManyToOne(() => Product, product => product.user)
    products: Product;
}