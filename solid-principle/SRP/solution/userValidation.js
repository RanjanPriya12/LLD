export class UserValidator {
  validate(email, password) {
    if (!email || !password) {
      throw new Error("Email and password are required");
    }
  }
}