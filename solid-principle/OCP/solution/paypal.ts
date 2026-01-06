import { PaymentMethod } from "./interface";

export class PayPalPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Processing PayPal payment of ₹${amount}`);
  }
}
