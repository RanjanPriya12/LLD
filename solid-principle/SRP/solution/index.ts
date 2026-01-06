import { PasswordHasher } from "./bcrypt";
import { EmailService } from "./email";
import { Logger } from "./logger";
import { UserRepository } from "./userRepository";
import { UserValidator } from "./userValidation";


export class UserService {
  constructor(
    private validator: UserValidator,
    private hasher: PasswordHasher,
    private repository: UserRepository,
    private emailService: EmailService,
    private logger: Logger
  ) {}

  async register(email: string, password: string): Promise<void> {
    this.validator.validate(email, password);

    const hashedPassword = await this.hasher.hash(password);

    await this.repository.save({
      email,
      password: hashedPassword,
      createdAt: new Date()
    });

    await this.emailService.sendWelcomeEmail(email);

    this.logger.info("User registered successfully");
  }
}




