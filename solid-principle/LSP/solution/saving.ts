import { Account } from "./account";
import { Withdrawable } from "./WithdrowableInterface";

export class SavingsAccount extends Account implements Withdrawable {

   deposit(amount: number): void {
      this.balance += amount;
      console.log(`₹${amount} deposited. Remaining balance ₹${this.balance}`);
   }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      throw new Error("Insufficient balance");
    }
    this.balance -= amount;
    console.log(`₹${amount} withdrawn. Remaining balance ₹${this.balance}`);
  }
}
