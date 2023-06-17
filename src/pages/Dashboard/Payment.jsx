import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  return (
    <div>
      <div className="text-center">
        <div className="flex justify-center w-full border-opacity-50">
          <div className="divider w-96"></div>
        </div>
        <h3 className="text-center text-3xl">PAYMENT</h3>
        <div className="flex justify-center w-full border-opacity-50">
          <div className="divider w-96"></div>
        </div>
          </div>
          <Elements>
              <CheckoutForm
          </Elements>
    </div>
  );
};

export default Payment;
