import { Account } from "./account";
import { FixedDepositAccount } from "./fixedDeposit";

function processWithdrawal(account: Account) {
  account.withdraw(1000); // ❌ Runtime failure for FD account
}

processWithdrawal(new FixedDepositAccount());
