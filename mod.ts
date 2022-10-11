import { isValidCheckDigitOnGTIN } from "./ExportsAndTests/isValidCheckDigitOnGTIN.ts"
import { isValidStringLengthForGTIN } from "./ExportsAndTests/isValidStringLengthForGTIN.ts"
import { removeGTINLeadingZerosToUpcOrGTIN13 } from "./ExportsAndTests/removeGTINLeadingZerosToUpcOrGTIN13.ts"
import { isValidGTIN } from "./ExportsAndTests/isValidGTIN.ts"
import { getFormatOfGTIN } from "./ExportsAndTests/getFormatOfGTIN.ts"
import { getFormatOfMinifiedGTIN } from "./ExportsAndTests/getFormatOfMinifiedGTIN.ts"
import { calculateCheckDigitForGTIN } from "./ExportsAndTests/calculateCheckDigitForGTIN.ts"
import { generateRandomGTIN } from "./ExportsAndTests/generateRandomGTIN.ts"
import { generateArrayOfRandomGTINs } from "./ExportsAndTests/generateArrayOfRandomGTINs.ts"

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
