import fetch from 'node-fetch';



export class AtomePayment {
    private endpoint: string;
    private token: string;
    constructor({ endpoint, username, password }) {
        this.endpoint = endpoint;
        this.token = Buffer.from(`${username}:${password}`).toString('base64');
    }

    async createOrderRequest({
        referenceId,
        currency,
        amount,
        callbackUrl,
        paymentResultUrl,
        mobileNumber,
        countryCode,
        lines,
        postCode,
        itemId,
        itemName,
        itemQuantity,
        itemPrice
    }) {
        const res = await fetch(`${this.endpoint}/v2/payments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${this.token}`,
            },
            body: JSON.stringify({
                referenceId,
                currency,
                amount,
                callbackUrl,
                paymentResultUrl,
                customerInfo: {
                    mobileNumber
                },
                shippingAddress: {
                    countryCode,
                    lines: [lines],
                    postCode
                },
                items: [{
                    itemId,
                    name: itemName,
                    quantity: itemQuantity,
                    price: itemPrice
                }]
            }),
        });
        const result = await res.json();
        return result;
    }

    async verifyPayment({ referenceId }) {
        const res = await fetch(`${this.endpoint}/v2/payments/${referenceId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${this.token}`,
            },
        });
        const result = await res.json();
        return result;
    }

    async refundPayment({ referenceId, amount }) {
        const res = await fetch(`${this.endpoint}/v2/payments/${referenceId}/refund`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${this.token}`,
            },
            body: JSON.stringify({
                refundAmount: amount,
            }),
        });
        const result = await res.json();
        return result;
    }
}
