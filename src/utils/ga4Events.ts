import ReactGA from 'react-ga4';

export const ga4ViewItem = (name: string, id: string, price: number) => {
  ReactGA.event('view_item', {
    currency: 'INR',
    value: price,
    items: [{ item_id: id, item_name: name, price, quantity: 1 }],
  });
};

export const ga4AddToCart = (name: string, id: string, price: number) => {
  ReactGA.event('add_to_cart', {
    currency: 'INR',
    value: price,
    items: [{ item_id: id, item_name: name, price, quantity: 1 }],
  });
};

export const ga4BeginCheckout = (value: number) => {
  ReactGA.event('begin_checkout', {
    currency: 'INR',
    value,
  });
};

export const ga4Purchase = (value: number, transactionId: string) => {
  ReactGA.event('purchase', {
    currency: 'INR',
    value,
    transaction_id: transactionId,
  });
};
