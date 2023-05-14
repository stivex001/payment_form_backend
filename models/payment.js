import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  cardNumber: { type: String, required: true },
  cardHolder: { type: String, required: true },
  expiryDate: { type: String, required: true },
  cvv: { type: String, required: true },
});

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
