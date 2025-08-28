import { IonPage, IonContent, IonToolbar, IonTitle } from "@ionic/react";
import { useCart } from "../contexts/ShoppingCartContext";
import { loadStripe } from '@stripe/stripe-js';
import CardSix from "../components/theme/card/CardSix";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
const Basket: React.FC = () => {
  
  const { items, updateQuantity, totalItems, totalPrice } = useCart();

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    if (!stripe) return;

    const lineItems = items.map(item => ({
      price: 'price_1RMcLJPs0mTxFoMuYuqhocQ6', 
      quantity: item.quantity,
    }));

    const { error } = await stripe.redirectToCheckout({
      lineItems,
      mode: 'payment',
      successUrl: window.location.origin + '/success',
      cancelUrl: window.location.origin + '/basket',
    });
    if (error) {
      console.error('Stripe Checkout error', error.message);
    }
  };

  return (
    <IonPage>
      <IonToolbar>
        <IonTitle>Shopping Cart</IonTitle>
      </IonToolbar>
      <IonContent>
        {items.length === 0 && <p className="noItems">There are no items in your cart.</p>}
        {items.map((item) => (
          <CardSix
            key={item.id}
            selected={false}
            onSelect={() => {}}
            brand={item.brand}
            rating={item.rating}
            imageSrc={item.imageSrc}
            title={item.title}
            description={item.description}
            deliveryEstimate={item.deliveryEstimate}
            soldCount={item.soldCount}
            price={item.price}
            quantity={item.quantity}
            onQuantityChange={(delta) => updateQuantity(item.id, delta)}
          />
        ))}
        <div className="basketSummary">
          <div className="totalInfo">
            <span className="label">Total</span>
            <span className="amount">${totalPrice.toFixed(2)}</span>
          </div>
          <button className="checkoutButton" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Basket;
