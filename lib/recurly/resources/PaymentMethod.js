/* istanbul ignore file */
/**
 * This file is automatically created by Recurly's OpenAPI generation process
 * and thus any edits you make by hand will be lost. If you wish to make a
 * change to this file, please create a Github issue explaining the changes you
 * need and we will usher them to the appropriate places.
 */
'use strict'

const Resource = require('../Resource')

/**
 * PaymentMethod
 * @typedef {Object} PaymentMethod
 * @prop {string} accountType - The bank account type. Only present for ACH payment methods.
 * @prop {string} billingAgreementId - Billing Agreement identifier. Only present for Amazon or Paypal payment methods.
 * @prop {string} cardType - Visa, MasterCard, American Express, Discover, JCB, etc.
 * @prop {number} expMonth - Expiration month.
 * @prop {number} expYear - Expiration year.
 * @prop {string} firstSix - Credit card number's first six digits.
 * @prop {string} lastFour - Credit card number's last four digits. Will refer to bank account if payment method is ACH.
 * @prop {string} object
 * @prop {string} routingNumber - The bank account's routing number. Only present for ACH payment methods.
 * @prop {string} routingNumberBank - The bank name of this routing number.
 */
class PaymentMethod extends Resource {
  static getSchema () {
    return {
      accountType: String,
      billingAgreementId: String,
      cardType: String,
      expMonth: Number,
      expYear: Number,
      firstSix: String,
      lastFour: String,
      object: String,
      routingNumber: String,
      routingNumberBank: String
    }
  }
}

module.exports = PaymentMethod
