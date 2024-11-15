import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsOptional, IsString, Matches } from "class-validator"

export class CreateUserDto {

    @ApiProperty({
        type: String,
        description: 'The email of the user',
        required: true
    })
    @IsString()
    @IsEmail()
    email: string

    @ApiProperty({
        type: String,
        description: 'The name of the user',
        required: true
    })
    @IsString()
    name: string

    @ApiProperty({
        type: String,
        description: 'The password of the user',
        required: true
    })
    @IsString()
    @Matches(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        {
            message: 'The password must have a Uppercase, lowercase letter and a number'
        }
    )
    password: string

    @ApiProperty({
        type: String,
        description: 'The address of the user',
        required: true
    })
    @IsString()
    address: string

    @ApiProperty({
        type: String,
        description: 'The phone of the user',
        required: true
    })
    @IsString()
    phone: string

    @ApiProperty({
        type: String,
        description: 'The country of the user',
        required: false
    })
    @IsString()
    @IsOptional()
    country?: string

    @ApiProperty({
        type: String,
        description: 'The city of the user',
        required: false
    })
    @IsString()
    @IsOptional()
    city?: string
}