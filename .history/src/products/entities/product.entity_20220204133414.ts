export class Product {
  externalId: string;
  name: string;
  platforms: Array<string>;
  price: any;
}

export class Price
{
  typename: string; // "SkuPrice",
  basePrice: string; // "RUB 4.899",
  discountText: string; //"-35%",
  discountedPrice: string; //"RUB 3.184",
  isExclusive: boolean,
  isFree: boolean,
  isTiedToSubscription: boolean,
  serviceBranding: Array<any>,
  upsellServiceBranding: null,
  upsellText: null
  }
