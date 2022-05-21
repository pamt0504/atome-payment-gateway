export declare class AtomePayment {
    private endpoint;
    private token;
    constructor({ endpoint, username, password }: {
        endpoint: string;
        username: string;
        password: string;
    });
    createOrderRequest({ referenceId, currency, amount, callbackUrl, paymentResultUrl, mobileNumber, countryCode, lines, postCode, itemId, itemName, itemQuantity, itemPrice }: {
        referenceId: string;
        currency: string;
        amount: number;
        callbackUrl: string;
        paymentResultUrl: string;
        mobileNumber: string;
        countryCode: string;
        lines: string;
        postCode: string;
        itemId: string;
        itemName: string;
        itemQuantity: number;
        itemPrice: number;
    }): Promise<any>;
    verifyPayment({ referenceId }: {
        referenceId: string;
    }): Promise<any>;
    refundPayment({ referenceId, amount }: {
        referenceId: string;
        amount: number;
    }): Promise<any>;
}
