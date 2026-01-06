import { Account } from "./account";

export class FixedDepositAccount extends Account {
  withdraw(amount: number): void {
    throw new Error("Withdrawals are not allowed from Fixed Deposit accounts");
  }
}
