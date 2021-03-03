export type RemoveArrayElement = (
  removeString: string,
  stringArray: string[]
) => string[]

export const removeArrayElement: RemoveArrayElement = (
  removeString,
  stringArray
) => {
  const regexp = new RegExp('^' + removeString + '.*')
  return stringArray.filter((string) => {
    return !string.match(regexp)
  })
}
