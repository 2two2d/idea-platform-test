import {ECurrency} from "@shared/enum/currency";

const BASE_CURRENCY = ECurrency.USD

const CURRENCY_COEFF = {
    [ECurrency.EUR]: 1.1,
    [ECurrency.RUB]: 100,
}

const CURRENCY_SIGN = {
    [ECurrency.EUR]: "€",
    [ECurrency.USD]: '$',
    [ECurrency.RUB]: '₽',
}

export {
    BASE_CURRENCY,
    CURRENCY_COEFF,
    CURRENCY_SIGN
}