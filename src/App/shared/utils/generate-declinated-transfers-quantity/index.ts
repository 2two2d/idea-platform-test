const generateDeclinatedTransfersQuantity = (number: number): string => {
  if (number === 0) return 'Без пересадок'

  const lastDigit = number % +'10'
  const lastTwoDigits = number % +'100'

  if (lastTwoDigits >= +'11' && lastTwoDigits <= +'19') return `${number} пересадок`

  if (lastDigit === 1) return `${number} пересадка`

  if (lastDigit === 2 || lastDigit === +'3' || lastDigit === +'4') return `${number} пересадки`

  return `${number} пересадок`
}

export {
  generateDeclinatedTransfersQuantity
}
