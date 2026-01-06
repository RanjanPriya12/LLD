class PaymentService {
  processPayment(type, amount) {
    if (type === "CREDIT_CARD") {
      console.log(`Processing credit card payment of ₹${amount}`);
    } 
    else if (type === "PAYPAL") {
      console.log(`Processing PayPal payment of ₹${amount}`);
    } 
    else if (type === "UPI") {
      console.log(`Processing UPI payment of ₹${amount}`);
    } 
    else {
      throw new Error("Unsupported payment method");
    }
  }
}
