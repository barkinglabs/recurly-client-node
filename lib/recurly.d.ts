// Type definitions for recurly
// Project: recurly
// Definitions by: Benjamin Eckel <dx@recurly.com>

export as namespace recurly;

export interface Site {
  id?: string;
  object?: string;
  subdomain?: string;
  publicApiKey?: string;
  mode?: string;
  address?: Address;
  settings?: Settings;
  features?: string[];
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface Address {
  firstName?: string;
  lastName?: string;
  phone?: string;
  street1?: string;
  street2?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  country?: string;
}

export interface Settings {
  billingAddressRequirement?: string;
  acceptedCurrencies?: string[];
  defaultCurrency?: string;
}

export interface Error {
  type?: string;
  message?: string;
  params?: object[];
}

export interface Account {
  id?: string;
  object?: string;
  state?: string;
  hostedLoginToken?: string;
  shippingAddresses?: ShippingAddress[];
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  code?: string;
  username?: string;
  email?: string;
  preferredLocale?: string;
  ccEmails?: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  vatNumber?: string;
  taxExempt?: boolean;
  exemptionCertificate?: string;
  parentAccountId?: string;
  billTo?: string;
  address?: Address;
  billingInfo?: BillingInfo;
  customFields?: CustomField[];
}

export interface ShippingAddress {
  id?: string;
  accountId?: string;
  nickname?: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  email?: string;
  vatNumber?: string;
  phone?: string;
  street1?: string;
  street2?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  country?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface BillingInfo {
  id?: string;
  object?: string;
  accountId?: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  address?: Address;
  vatNumber?: string;
  valid?: boolean;
  paymentMethod?: PaymentMethod;
  fraud?: FraudInfo;
  createdAt?: Date;
  updatedAt?: Date;
  updatedBy?: BillingInfoUpdatedBy;
}

export interface PaymentMethod {
  object?: string;
  cardType?: string;
  firstSix?: string;
  lastFour?: string;
  expMonth?: number;
  expYear?: number;
  billingAgreementId?: string;
  accountType?: string;
  routingNumber?: string;
  routingNumberBank?: string;
}

export interface FraudInfo {
  score?: number;
  decision?: string;
  riskRulesTriggered?: object;
}

export interface BillingInfoUpdatedBy {
  ip?: string;
  country?: string;
}

export interface CustomField {
  name?: string;
  value?: string;
}

export interface ErrorMayHaveTransaction {
  type?: string;
  message?: string;
  params?: object[];
  transactionError?: TransactionError;
}

export interface TransactionError {
  transactionId?: string;
  category?: string;
  code?: string;
  message?: string;
  merchantAdvice?: string;
}

export interface AccountAcquisition {
  cost?: AccountAcquisitionCost;
  channel?: string;
  subchannel?: string;
  campaign?: string;
  id?: string;
  object?: string;
  account?: AccountMini;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface AccountAcquisitionCost {
  currency?: string;
  amount?: number;
}

export interface AccountMini {
  id?: string;
  object?: string;
  code?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  parentAccountId?: string;
  billTo?: string;
}

export interface AccountBalance {
  object?: string;
  account?: AccountMini;
  pastDue?: boolean;
  balances?: AccountBalanceAmount[];
}

export interface AccountBalanceAmount {
  currency?: string;
  amount?: number;
}

export interface CouponRedemption {
  id?: string;
  object?: string;
  account?: AccountMini;
  coupon?: Coupon;
  state?: string;
  currency?: string;
  discounted?: number;
  createdAt?: Date;
  updatedAt?: Date;
  removedAt?: Date;
}

export interface Coupon {
  id?: string;
  object?: string;
  code?: string;
  name?: string;
  state?: string;
  maxRedemptions?: number;
  maxRedemptionsPerAccount?: number;
  uniqueCouponCodesCount?: number;
  uniqueCodeTemplate?: string;
  duration?: string;
  temporalAmount?: number;
  temporalUnit?: string;
  freeTrialUnit?: string;
  freeTrialAmount?: number;
  appliesToAllPlans?: boolean;
  appliesToNonPlanCharges?: boolean;
  plansNames?: string[];
  plans?: PlanMini[];
  redemptionResource?: string;
  discount?: CouponDiscount;
  couponType?: string;
  hostedPageDescription?: string;
  invoiceDescription?: string;
  redeemBy?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  expiredAt?: Date;
}

export interface PlanMini {
  id?: string;
  object?: string;
  code?: string;
  name?: string;
}

export interface CouponDiscount {
  type?: string;
  percent?: number;
  currencies?: CouponDiscountPricing[];
  trial?: CouponDiscountTrial;
}

export interface CouponDiscountPricing {
  currency?: string;
  amount?: number;
}

export interface CouponDiscountTrial {
  unit?: string;
  length?: number;
}

export interface CreditPayment {
  id?: string;
  object?: string;
  uuid?: string;
  action?: string;
  account?: AccountMini;
  appliedToInvoice?: InvoiceMini;
  originalInvoice?: InvoiceMini;
  currency?: string;
  amount?: number;
  originalCreditPaymentId?: string;
  refundTransaction?: Transaction;
  createdAt?: Date;
  updatedAt?: Date;
  voidedAt?: Date;
}

export interface InvoiceMini {
  id?: string;
  object?: string;
  number?: string;
  type?: string;
  state?: string;
}

export interface Transaction {
  id?: string;
  object?: string;
  uuid?: string;
  originalTransactionId?: string;
  account?: AccountMini;
  invoice?: InvoiceMini;
  voidedByInvoice?: InvoiceMini;
  subscriptionIds?: string[];
  type?: string;
  origin?: string;
  currency?: string;
  amount?: number;
  status?: string;
  success?: boolean;
  refunded?: boolean;
  billingAddress?: Address;
  collectionMethod?: string;
  paymentMethod?: PaymentMethod;
  ipAddressV4?: string;
  ipAddressCountry?: string;
  statusCode?: string;
  statusMessage?: string;
  customerMessage?: string;
  customerMessageLocale?: string;
  paymentGateway?: TransactionPaymentGateway;
  gatewayMessage?: string;
  gatewayReference?: string;
  gatewayApprovalCode?: string;
  gatewayResponseCode?: string;
  gatewayResponseTime?: number;
  gatewayResponseValues?: object;
  cvvCheck?: string;
  avsCheck?: string;
  createdAt?: Date;
  voidedAt?: Date;
  collectedAt?: Date;
}

export interface TransactionPaymentGateway {
  id?: string;
  object?: string;
  type?: string;
  name?: string;
}

export interface Invoice {
  id?: string;
  object?: string;
  type?: string;
  origin?: string;
  state?: string;
  account?: AccountMini;
  subscriptionIds?: string[];
  previousInvoiceId?: string;
  number?: string;
  collectionMethod?: string;
  poNumber?: string;
  netTerms?: number;
  address?: InvoiceAddress;
  shippingAddress?: ShippingAddress;
  currency?: string;
  discount?: number;
  subtotal?: number;
  tax?: number;
  total?: number;
  refundableAmount?: number;
  paid?: number;
  balance?: number;
  taxInfo?: TaxInfo;
  vatNumber?: string;
  vatReverseChargeNotes?: string;
  termsAndConditions?: string;
  customerNotes?: string;
  lineItems?: LineItemList;
  transactions?: Transaction[];
  creditPayments?: CreditPayment[];
  createdAt?: Date;
  updatedAt?: Date;
  dueAt?: Date;
  closedAt?: Date;
}

export interface InvoiceAddress {
  nameOnAccount?: string;
  company?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  street1?: string;
  street2?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  country?: string;
}

export interface TaxInfo {
  type?: string;
  region?: string;
  rate?: number;
}

export interface LineItemList {
  object?: string;
  hasMore?: boolean;
  next?: string;
  data?: LineItem[];
}

export interface LineItem {
  id?: string;
  object?: string;
  uuid?: string;
  type?: string;
  state?: string;
  legacyCategory?: string;
  account?: AccountMini;
  subscriptionId?: string;
  planId?: string;
  planCode?: string;
  addOnId?: string;
  addOnCode?: string;
  invoiceId?: string;
  invoiceNumber?: string;
  previousLineItemId?: string;
  originalLineItemInvoiceId?: string;
  origin?: string;
  accountingCode?: string;
  productCode?: string;
  creditReasonCode?: string;
  currency?: string;
  amount?: number;
  description?: string;
  quantity?: number;
  unitAmount?: number;
  subtotal?: number;
  discount?: number;
  tax?: number;
  taxable?: boolean;
  taxExempt?: boolean;
  taxCode?: string;
  taxInfo?: TaxInfo;
  prorationRate?: number;
  refund?: boolean;
  refundedQuantity?: number;
  creditApplied?: number;
  shippingAddress?: ShippingAddress;
  startDate?: Date;
  endDate?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface InvoiceCollection {
  object?: string;
  chargeInvoice?: Invoice;
  creditInvoices?: Invoice[];
}

export interface AccountNote {
  id?: string;
  object?: string;
  accountId?: string;
  user?: User;
  message?: string;
  createdAt?: Date;
}

export interface User {
  id?: string;
  object?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  timeZone?: string;
  createdAt?: Date;
  deletedAt?: Date;
}

export interface Subscription {
  id?: string;
  object?: string;
  uuid?: string;
  account?: AccountMini;
  plan?: PlanMini;
  state?: string;
  shipping?: SubscriptionShipping;
  couponRedemptions?: CouponRedemptionMini[];
  pendingChange?: SubscriptionChange;
  currentPeriodStartedAt?: Date;
  currentPeriodEndsAt?: Date;
  currentTermStartedAt?: Date;
  currentTermEndsAt?: Date;
  trialStartedAt?: Date;
  trialEndsAt?: Date;
  remainingBillingCycles?: number;
  totalBillingCycles?: number;
  renewalBillingCycles?: number;
  autoRenew?: boolean;
  pausedAt?: Date;
  remainingPauseCycles?: number;
  currency?: string;
  unitAmount?: number;
  quantity?: number;
  addOns?: SubscriptionAddOn[];
  addOnsTotal?: number;
  subtotal?: number;
  collectionMethod?: string;
  poNumber?: string;
  netTerms?: number;
  termsAndConditions?: string;
  customerNotes?: string;
  expirationReason?: string;
  customFields?: CustomField[];
  createdAt?: Date;
  updatedAt?: Date;
  activatedAt?: Date;
  canceledAt?: Date;
  expiresAt?: Date;
  bankAccountAuthorizedAt?: Date;
}

export interface SubscriptionShipping {
  object?: string;
  address?: ShippingAddress;
  method?: ShippingMethodMini;
  amount?: number;
}

export interface ShippingMethodMini {
  id?: string;
  object?: string;
  code?: string;
  name?: string;
}

export interface CouponRedemptionMini {
  id?: string;
  object?: string;
  coupon?: CouponMini;
  state?: string;
  discounted?: number;
  createdAt?: Date;
}

export interface CouponMini {
  id?: string;
  object?: string;
  code?: string;
  name?: string;
  state?: string;
  discount?: CouponDiscount;
  couponType?: string;
  expiredAt?: Date;
}

export interface SubscriptionChange {
  id?: string;
  object?: string;
  subscriptionId?: string;
  plan?: PlanMini;
  addOns?: SubscriptionAddOn[];
  unitAmount?: number;
  quantity?: number;
  shipping?: SubscriptionShipping;
  activateAt?: Date;
  activated?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface SubscriptionAddOn {
  id?: string;
  object?: string;
  subscriptionId?: string;
  addOn?: AddOnMini;
  quantity?: number;
  unitAmount?: number;
  createdAt?: Date;
  updatedAt?: Date;
  expiredAt?: Date;
}

export interface AddOnMini {
  id?: string;
  object?: string;
  code?: string;
  name?: string;
  accountingCode?: string;
}

export interface UniqueCouponCode {
  id?: string;
  object?: string;
  code?: string;
  state?: string;
  createdAt?: Date;
  updatedAt?: Date;
  redeemedAt?: Date;
  expiredAt?: Date;
}

export interface CustomFieldDefinition {
  id?: string;
  object?: string;
  relatedType?: string;
  name?: string;
  userAccess?: string;
  displayName?: string;
  tooltip?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface Plan {
  id?: string;
  object?: string;
  code?: string;
  state?: string;
  name?: string;
  description?: string;
  intervalUnit?: string;
  intervalLength?: number;
  trialUnit?: string;
  trialLength?: number;
  totalBillingCycles?: number;
  autoRenew?: boolean;
  accountingCode?: string;
  setupFeeAccountingCode?: string;
  taxCode?: string;
  taxExempt?: boolean;
  currencies?: PlanPricing[];
  hostedPages?: PlanHostedPages;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface PlanPricing {
  currency?: string;
  setupFee?: number;
  unitAmount?: number;
}

export interface PlanHostedPages {
  successUrl?: string;
  cancelUrl?: string;
  bypassConfirmation?: boolean;
  displayQuantity?: boolean;
}

export interface AddOn {
  id?: string;
  object?: string;
  planId?: string;
  code?: string;
  state?: string;
  name?: string;
  accountingCode?: string;
  taxCode?: string;
  displayQuantity?: boolean;
  defaultQuantity?: number;
  currencies?: AddOnPricing[];
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface AddOnPricing {
  currency?: string;
  unitAmount?: number;
}

export interface ShippingMethod {
  id?: string;
  object?: string;
  code?: string;
  name?: string;
  taxCode?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}



export interface Empty {
}

export declare class Pager<T> {
  count(): number;
  first(): T;
  each(): AsyncIterable<T>;
  eachPage(): AsyncIterable<T>;
}

export declare class Client {
  constructor(apiKey: string);
  apiVersion(): string;
  listSites(params: object): Pager<Site>;
  getSite(siteId: string): Promise<Site>;
  listAccounts(params: object): Pager<Account>;
  createAccount(body: object): Promise<Account>;
  getAccount(accountId: string): Promise<Account>;
  updateAccount(accountId: string, body: object): Promise<Account>;
  deactivateAccount(accountId: string): Promise<Account>;
  getAccountAcquisition(accountId: string): Promise<AccountAcquisition>;
  updateAccountAcquisition(accountId: string, body: object): Promise<AccountAcquisition>;
  removeAccountAcquisition(accountId: string): Promise<Empty>;
  reactivateAccount(accountId: string): Promise<Account>;
  getAccountBalance(accountId: string): Promise<AccountBalance>;
  getBillingInfo(accountId: string): Promise<BillingInfo>;
  updateBillingInfo(accountId: string, body: object): Promise<BillingInfo>;
  removeBillingInfo(accountId: string): Promise<Empty>;
  listAccountCouponRedemptions(accountId: string, params: object): Pager<CouponRedemption>;
  getActiveCouponRedemption(accountId: string): Promise<CouponRedemption>;
  createCouponRedemption(accountId: string, body: object): Promise<CouponRedemption>;
  removeCouponRedemption(accountId: string): Promise<CouponRedemption>;
  listAccountCreditPayments(accountId: string, params: object): Pager<CreditPayment>;
  listAccountInvoices(accountId: string, params: object): Pager<Invoice>;
  createInvoice(accountId: string, body: object): Promise<InvoiceCollection>;
  previewInvoice(accountId: string, body: object): Promise<InvoiceCollection>;
  listAccountLineItems(accountId: string, params: object): Pager<LineItem>;
  createLineItem(accountId: string, body: object): Promise<LineItem>;
  listAccountNotes(accountId: string, params: object): Pager<AccountNote>;
  getAccountNote(accountId: string, accountNoteId: string): Promise<AccountNote>;
  listShippingAddresses(accountId: string, params: object): Pager<ShippingAddress>;
  createShippingAddress(accountId: string, body: object): Promise<ShippingAddress>;
  getShippingAddress(accountId: string, shippingAddressId: string): Promise<ShippingAddress>;
  updateShippingAddress(accountId: string, shippingAddressId: string, body: object): Promise<ShippingAddress>;
  removeShippingAddress(accountId: string, shippingAddressId: string): Promise<Empty>;
  listAccountSubscriptions(accountId: string, params: object): Pager<Subscription>;
  listAccountTransactions(accountId: string, params: object): Pager<Transaction>;
  listChildAccounts(accountId: string, params: object): Pager<Account>;
  listAccountAcquisition(params: object): Pager<AccountAcquisition>;
  listCoupons(params: object): Pager<Coupon>;
  createCoupon(body: object): Promise<Coupon>;
  getCoupon(couponId: string): Promise<Coupon>;
  updateCoupon(couponId: string, body: object): Promise<Coupon>;
  listUniqueCouponCodes(couponId: string, params: object): Pager<UniqueCouponCode>;
  listCreditPayments(params: object): Pager<CreditPayment>;
  getCreditPayment(creditPaymentId: string): Promise<CreditPayment>;
  listCustomFieldDefinitions(params: object): Pager<CustomFieldDefinition>;
  getCustomFieldDefinition(customFieldDefinitionId: string): Promise<CustomFieldDefinition>;
  listInvoices(params: object): Pager<Invoice>;
  getInvoice(invoiceId: string): Promise<Invoice>;
  putInvoice(invoiceId: string, body: object): Promise<Invoice>;
  collectInvoice(invoiceId: string, body: object): Promise<Invoice>;
  failInvoice(invoiceId: string): Promise<Invoice>;
  markInvoiceSuccessful(invoiceId: string): Promise<Invoice>;
  reopenInvoice(invoiceId: string): Promise<Invoice>;
  voidInvoice(invoiceId: string): Promise<Invoice>;
  listInvoiceLineItems(invoiceId: string, params: object): Pager<LineItem>;
  listInvoiceCouponRedemptions(invoiceId: string, params: object): Pager<CouponRedemption>;
  listRelatedInvoices(invoiceId: string, params: object): Pager<Invoice>;
  refundInvoice(invoiceId: string, body: object): Promise<Invoice>;
  listLineItems(params: object): Pager<LineItem>;
  getLineItem(lineItemId: string): Promise<LineItem>;
  removeLineItem(lineItemId: string): Promise<Empty>;
  listPlans(params: object): Pager<Plan>;
  createPlan(body: object): Promise<Plan>;
  getPlan(planId: string): Promise<Plan>;
  updatePlan(planId: string, body: object): Promise<Plan>;
  removePlan(planId: string): Promise<Plan>;
  listPlanAddOns(planId: string, params: object): Pager<AddOn>;
  createPlanAddOn(planId: string, body: object): Promise<AddOn>;
  getPlanAddOn(planId: string, addOnId: string): Promise<AddOn>;
  updatePlanAddOn(planId: string, addOnId: string, body: object): Promise<AddOn>;
  removePlanAddOn(planId: string, addOnId: string): Promise<AddOn>;
  listAddOns(params: object): Pager<AddOn>;
  getAddOn(addOnId: string): Promise<AddOn>;
  listShippingMethods(params: object): Pager<ShippingMethod>;
  getShippingMethod(id: string): Promise<ShippingMethod>;
  listSubscriptions(params: object): Pager<Subscription>;
  createSubscription(body: object): Promise<Subscription>;
  getSubscription(subscriptionId: string): Promise<Subscription>;
  modifySubscription(subscriptionId: string, body: object): Promise<Subscription>;
  terminateSubscription(subscriptionId: string, params: object): Promise<Subscription>;
  cancelSubscription(subscriptionId: string): Promise<Subscription>;
  reactivateSubscription(subscriptionId: string): Promise<Subscription>;
  pauseSubscription(subscriptionId: string, body: object): Promise<Subscription>;
  resumeSubscription(subscriptionId: string): Promise<Subscription>;
  getSubscriptionChange(subscriptionId: string): Promise<SubscriptionChange>;
  createSubscriptionChange(subscriptionId: string, body: object): Promise<SubscriptionChange>;
  removeSubscriptionChange(subscriptionId: string): Promise<Empty>;
  listSubscriptionInvoices(subscriptionId: string, params: object): Pager<Invoice>;
  listSubscriptionLineItems(subscriptionId: string, params: object): Pager<LineItem>;
  listSubscriptionCouponRedemptions(subscriptionId: string, params: object): Pager<CouponRedemption>;
  listTransactions(params: object): Pager<Transaction>;
  getTransaction(transactionId: string): Promise<Transaction>;
  getUniqueCouponCode(uniqueCouponCodeId: string): Promise<UniqueCouponCode>;
  deactivateUniqueCouponCode(uniqueCouponCodeId: string): Promise<UniqueCouponCode>;
  reactivateUniqueCouponCode(uniqueCouponCodeId: string): Promise<UniqueCouponCode>;
  createPurchase(body: object): Promise<InvoiceCollection>;
  previewPurchase(body: object): Promise<InvoiceCollection>;

}
