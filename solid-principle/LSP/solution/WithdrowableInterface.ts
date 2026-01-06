import { NonWithdrawable } from "./NonWithdrowalInterface";

export interface Withdrawable extends NonWithdrawable {
  withdraw(amount: number): void;
}
