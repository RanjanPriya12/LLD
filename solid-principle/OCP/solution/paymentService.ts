import { PaymentMethod } from "./interface";

export class PaymentService {
  constructor(private paymentMethod: PaymentMethod) {}

  process(amount: number): void {
    this.paymentMethod.pay(amount);
  }
}
