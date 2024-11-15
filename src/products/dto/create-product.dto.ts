import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"

export class CreateProductDto {

    @ApiProperty({
        type: String,
        description: 'The name of the product',
        required: true
    })
    @IsString()
    name: string

    @ApiProperty({
        type: String,
        description: 'The description of the product',
        required: true
    })
    @IsString()
    description: string

    @ApiProperty({
        type: Number,
        description: 'The price of the product',
        required: true
    })
    @IsNumber()
    price: number

    @ApiProperty({
        type: Number,
        description: 'The stock of the product',
        required: true
    })
    @IsNumber()
    stock: number

    @ApiProperty({
        type: String,
        description: 'The image url of the product',
        required: true
    })
    @IsString()
    imgUrl: string
}