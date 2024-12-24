const HEX_LENGTH = 6

const generateHex = (): string => {
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  const randomColor = Math.floor(Math.random() * 256 * 256 * 256).toString(16)

  return `#${randomColor.padStart(HEX_LENGTH, '0')}`
}

export {
  generateHex
}
