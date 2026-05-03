declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

const fbEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params);
  }
};

export const fbViewContent = (contentName: string, contentId: string, value: number) => {
  fbEvent('ViewContent', {
    content_name: contentName,
    content_ids: [contentId],
    content_type: 'product',
    value,
    currency: 'INR',
  });
};

export const fbAddToCart = (contentName: string, contentId: string, value: number) => {
  fbEvent('AddToCart', {
    content_name: contentName,
    content_ids: [contentId],
    content_type: 'product',
    value,
    currency: 'INR',
  });
};

export const fbInitiateCheckout = (value: number, numItems: number) => {
  fbEvent('InitiateCheckout', {
    value,
    currency: 'INR',
    num_items: numItems,
  });
};

export const fbPurchase = (value: number) => {
  fbEvent('Purchase', {
    value,
    currency: 'INR',
  });
};
