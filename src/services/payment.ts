import axios from 'axios';

interface PaymentDetails {
  cardNumber: string;
  expiry: string;
  cvv: string;
  name: string;
  amount: number;
}

// Payment API configuration
const PAYMENT_API = {
  baseURL: 'https://your-payment-api.com',
  merchantId: 'YOUR_MERCHANT_ID',
  secretKey: 'YOUR_SECRET_KEY',
};

export async function processPayment(paymentDetails: PaymentDetails) {
  try {
    const response = await axios.post(`${PAYMENT_API.baseURL}/process-payment`, {
      merchantId: PAYMENT_API.merchantId,
      amount: paymentDetails.amount,
      cardDetails: {
        number: paymentDetails.cardNumber.replace(/\s/g, ''),
        expiry: paymentDetails.expiry,
        cvv: paymentDetails.cvv,
        holderName: paymentDetails.name,
      },
    }, {
      headers: {
        'Authorization': `Bearer ${PAYMENT_API.secretKey}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Töleg amala aşyrylmady. Täzeden synanyşyň.');
  }
}