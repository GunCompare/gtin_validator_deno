import { isValidCheckDigitOnGTIN } from "./Funcs/isValidCheckDigitOnGTIN.ts"
import { isValidStringLengthForGTIN } from "./Funcs/isValidStringLengthForGTIN.ts"
import { removeGTINLeadingZerosToUpcOrGTIN13 } from "./Funcs/removeGTINLeadingZerosToUpcOrGTIN13.ts"
import { isValidGTIN } from "./Funcs/isValidGTIN.ts"
import { getFormatOfGTIN } from "./Funcs/getFormatOfGTIN.ts"
import { getFormatOfMinifiedGTIN } from "./Funcs/getFormatOfMinifiedGTIN.ts"
import { calculateCheckDigitForGTIN } from "./Funcs/calculateCheckDigitForGTIN.ts"
import { generateRandomGTIN } from "./Funcs/generateRandomGTIN.ts"
import { generateArrayOfRandomGTINs } from "./Funcs/generateArrayOfRandomGTINs.ts"

export {
  isValidGTIN,
  isValidCheckDigitOnGTIN,
  isValidStringLengthForGTIN,
  removeGTINLeadingZerosToUpcOrGTIN13,
  getFormatOfGTIN,
  getFormatOfMinifiedGTIN,
  calculateCheckDigitForGTIN,
  generateRandomGTIN,
  generateArrayOfRandomGTINs,
}
