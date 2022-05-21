# API Atome Payment Gateway

The plugin will make it easier to integrate Atome payments.

## Process flow
![Flow]()

## Installation
The first, Atome partner must be successfully registered.
Use the package manager [npm](https://www.npmjs.com/) to install.

```bash
npm i atome-payment-gateway
```

## Usage
```typescript
import { AtomePayment } from 'atome-payment-gateway';

/* HOST_WEBHOOK => Partner API. Used by Atome to submit payment results by IPN method (server-to-server) method */
const HOST_WEBHOOK = process.env.HOST_WEBHOOK;

/* constructor: endpoint, username, password => provided by Atome*/
class AtomePaymentService {
    constructor( endpoint, username, password ) {
      this.atomePayment = new AtomePayment({ endpoint, username, password })
    };

/* The payment method payUrl is returned  */
  async createPayment({
    referenceId,
    amount,
    amount,
    paymentResultUrl = 'https://your-website.com',
    mobileNumber,
    countryCode,
    lines,
    postCode,
    itemId,
    itemName,
    itemQuantity,
    itemPrice
  }) {
    try {
      const result = await this.atomePayment.createOrderRequest({
        referenceId,
        currency,
        amount,
        paymentResultUrl,
        callbackUrl: HOST_WEBHOOK,
        mobileNumber,
        countryCode,
        lines,
        postCode,
        itemId,
        itemName,
        itemQuantity,
        itemPrice
      });
      return result;
    } catch (error) {
      console.error(error)
      throw error;
    }
  }
  
/* Proceed the refund payment */
  async refundPayment({ referenceId, amount }) {
    try {
      const result = await this.atomePayment.refundPayment({
        referenceId,
        amount
      });
      return result;
    } catch (error) {
      console.error(error)
      throw error;
    }
  }

/* The function for verify webhook request and payment */
  verifyPayment({ referenceId }){
    try {
      const result = this.atomePayment.verifyPayment({ referenceId });
      return result;
    } catch (error) {
      console.error(error)
      throw error;
    }
  }
}
```

## Contributing
Pull requests are welcome

## Important
Mail:  thao.pamt@gmail.com
Skype: phamanmaithao10@gmail.com
Documentation: (https://doc.apaylater.com/v2/#section/Overview)

## License
[MIT](https://choosealicense.com/licenses/mit/)
                           