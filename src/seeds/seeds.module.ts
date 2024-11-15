import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "src/products/entities/product.entity";
import { ProductsSeed } from "./products/products.seeds";
import { User } from "src/users/entities/user.entity";
import { UsersSeed } from "./users/users-seeds";

@Module({
    imports: [
        TypeOrmModule.forFeature([Product]),
        TypeOrmModule.forFeature([User]),
    ],
    providers: [
        ProductsSeed,
        UsersSeed,
    ],
    exports: [
        ProductsSeed,
        UsersSeed,
    ]
})

export class SeedModule { }