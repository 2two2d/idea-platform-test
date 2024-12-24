import { BASE_CURRENCY, CURRENCY_COEFF, CURRENCY_SIGN } from '@shared/consants'

import type { ECurrency } from '@shared/enum/currency'

const formatPrice = (price: number, currency: ECurrency): string => {
  if (currency === BASE_CURRENCY) return price + CURRENCY_SIGN[currency]

  return Math.round(price * CURRENCY_COEFF[currency]) + CURRENCY_SIGN[currency]
}

export {
  formatPrice
}
