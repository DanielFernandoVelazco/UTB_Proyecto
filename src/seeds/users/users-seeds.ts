import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/users/entities/user.entity";
import { Repository } from "typeorm";
import { usersMock } from "./users-mock";

export class UsersSeed {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async seed() {
        const existingUserName = (await this.userRepository.find()).map(
            (user) => user.name,
        )

        for (const userData of usersMock) {
            if (!existingUserName.includes(userData.name)) {
                const user = new User();
                user.name = userData.name;
                user.password = userData.password;
                user.email = userData.email;
                user.address = userData.address;
                user.phone = userData.phone;
                user.coutry = userData.coutry;
                user.city = userData.city;
                await this.userRepository.save(user);

            }
        }
    }
}