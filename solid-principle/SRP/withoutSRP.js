import bcrypt from "bcrypt";

class UserService {
  async registerUser(userData) {
    // 1. Validation
    if (!userData.email || !userData.password) {
      throw new Error("Email and password are required");
    }

    // 2. Password hashing
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // 3. Save to database
    const user = {
      email: userData.email,
      password: hashedPassword,
      createdAt: new Date()
    };

    console.log("Saving user to database:", user);

    // 4. Send email
    console.log(`Sending welcome email to ${user.email}`);

    // 5. Logging
    console.log("User registered successfully");
  }
}

// Why this is bad:

// Changing email provider → modify UserService

// Changing password strategy → modify UserService

// Changing DB → modify UserService
