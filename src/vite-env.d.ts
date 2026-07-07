/// <reference types="vite/client" />

// Shiprocket Checkout UI SDK, loaded globally via <script> in index.html
// (see https://checkout-ui.shiprocket.com/assets/js/channels/shopify.js).
interface HeadlessCheckoutAddToCartOptions {
  fallbackUrl: string;
  isInitiatedFromApp?: boolean;
}

interface Window {
  HeadlessCheckout?: {
    addToCart: (
      event: Event,
      token: string,
      options: HeadlessCheckoutAddToCartOptions
    ) => void;
  };
}
