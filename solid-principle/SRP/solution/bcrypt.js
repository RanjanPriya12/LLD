import bcrypt from "bcrypt";

export class PasswordHasher {
  async hash(password) {
    return bcrypt.hash(password, 10);
  }
}