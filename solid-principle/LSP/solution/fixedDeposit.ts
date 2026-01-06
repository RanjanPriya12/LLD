import { Account } from "./account";
import { NonWithdrawable } from "./NonWithdrowalInterface";

export class FixedDepositAccount extends Account implements NonWithdrawable {
  deposit(amount: number): void {
      this.balance += amount;
      console.log(`₹${amount} deposited. Remaining balance ₹${this.balance}`);
   }
}
