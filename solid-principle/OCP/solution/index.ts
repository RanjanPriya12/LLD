import { PaymentService } from "./paymentService";
import { UPIPayment } from "./upi";

const paymentService = new PaymentService(new UPIPayment());
paymentService.process(500);
