export class UserRepository {
  async save(user) {
    // Production: actual DB call (PostgreSQL / MongoDB)
    console.log("Saving user to database:", user);
  }
}