export class UserResponseDto {
    id: string;
    email: string;
    name: string;
    password: string;
    address: string;
    phone: string;
    country?: string;
    city?: string;

    constructor(partial: Partial<UserResponseDto>) {
        const { id, email, name, password, address, phone, country, city } = partial

        this.id = id
        this.email = email
        this.name = name
        this.password = password
        this.address = address
        this.phone = phone
        this.country = country
        this.city = city
    }
}