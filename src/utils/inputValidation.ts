import { maxNameLengthMessage, minNameLengthMessage } from "../constants/messages"



export const validateTextInput = function (
  minLength: number,
  maxLength: number
) {
  return function (value: string): string| boolean {
    value = value.trim()

    if (value.length < minLength) {
      return minNameLengthMessage(minLength)
    }

    if (value.length > maxLength) {
      return maxNameLengthMessage(maxLength)
    }
    return true
  }
}

export const trimValue = function (val: string): string {
  return val.trim()
}
