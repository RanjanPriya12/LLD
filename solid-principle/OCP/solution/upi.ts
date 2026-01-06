import { PaymentMethod } from "./interface";

export class UPIPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Processing UPI payment of ₹${amount}`);
  }
}
